<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface StatCard {
  title: string
  value: number
  prefix?: string
  suffix?: string
  trend: number
  icon: string
  color: string
}

interface ChartData {
  month: string
  value: number
}

interface LogItem {
  id: number
  time: string
  user: string
  action: string
  status: 'success' | 'warning' | 'error'
  ip: string
}

const isDark = ref(false)

const stats: StatCard[] = [
  { title: '访问量', value: 128456, suffix: '次', trend: 12.5, icon: '👁️', color: '#3b82f6' },
  { title: '用户数', value: 8942, suffix: '人', trend: 8.3, icon: '👥', color: '#06b6d4' },
  { title: '转化率', value: 4.8, suffix: '%', trend: -2.1, icon: '📈', color: '#10b981' },
  { title: '收入', value: 156890, prefix: '¥', trend: 15.7, icon: '💰', color: '#f59e0b' }
]

const chartData: ChartData[] = [
  { month: '1月', value: 4500 },
  { month: '2月', value: 5200 },
  { month: '3月', value: 4800 },
  { month: '4月', value: 6100 },
  { month: '5月', value: 5800 },
  { month: '6月', value: 7200 },
  { month: '7月', value: 6800 },
  { month: '8月', value: 8100 },
  { month: '9月', value: 7500 },
  { month: '10月', value: 8900 },
  { month: '11月', value: 9200 },
  { month: '12月', value: 10500 }
]

const progressData = [
  { label: '已完成', value: 75, color: '#3b82f6' },
  { label: '进行中', value: 15, color: '#06b6d4' },
  { label: '待处理', value: 10, color: '#f59e0b' }
]

const generateLogs = (): LogItem[] => {
  const actions = ['登录系统', '修改密码', '上传文件', '删除数据', '导出报表', '创建订单', '更新配置', '查看日志']
  const statuses: ('success' | 'warning' | 'error')[] = ['success', 'success', 'success', 'warning', 'error']
  const users = ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十']
  
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    time: `2024-01-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    user: users[Math.floor(Math.random() * users.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
  }))
}

const logs = ref<LogItem[]>(generateLogs())

const svgWidth = 600
const svgHeight = 250
const padding = { top: 20, right: 20, bottom: 40, left: 60 }

const chartWidth = svgWidth - padding.left - padding.right
const chartHeight = svgHeight - padding.top - padding.bottom

const maxValue = computed(() => Math.max(...chartData.map(d => d.value)))

const points = computed(() => {
  return chartData.map((d, i) => {
    const x = padding.left + (i / (chartData.length - 1)) * chartWidth
    const y = padding.top + chartHeight - (d.value / maxValue.value) * chartHeight
    return { x, y, value: d.value, month: d.month }
  })
})

const linePath = computed(() => {
  if (points.value.length === 0) return ''
  let path = `M ${points.value[0].x} ${points.value[0].y}`
  for (let i = 1; i < points.value.length; i++) {
    const prev = points.value[i - 1]
    const curr = points.value[i]
    const cpx1 = prev.x + (curr.x - prev.x) / 3
    const cpx2 = prev.x + (curr.x - prev.x) * 2 / 3
    path += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`
  }
  return path
})

const areaPath = computed(() => {
  if (points.value.length === 0) return ''
  const firstPoint = points.value[0]
  const lastPoint = points.value[points.value.length - 1]
  return `${linePath.value} L ${lastPoint.x} ${padding.top + chartHeight} L ${firstPoint.x} ${padding.top + chartHeight} Z`
})

const checkDarkMode = () => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

let darkModeMediaQuery: MediaQueryList | null = null

onMounted(() => {
  checkDarkMode()
  darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkModeMediaQuery.addEventListener('change', checkDarkMode)
})

onUnmounted(() => {
  if (darkModeMediaQuery) {
    darkModeMediaQuery.removeEventListener('change', checkDarkMode)
  }
})

const getStatusTag = (status: string) => {
  const map: Record<string, { type: string; text: string }> = {
    success: { type: 'success', text: '成功' },
    warning: { type: 'warning', text: '警告' },
    error: { type: 'danger', text: '失败' }
  }
  return map[status] || { type: 'info', text: status }
}

const getStrokeDashArray = (value: number, radius: number) => {
  const circumference = 2 * Math.PI * radius
  return `${(value / 100) * circumference} ${circumference}`
}

const getStrokeDashOffset = (value: number, radius: number) => {
  const circumference = 2 * Math.PI * radius
  return circumference * 0.25
}
</script>

<template>
  <div class="dashboard" :class="{ 'is-dark': isDark }">
    <div class="dashboard-container">
      <h1 class="dashboard-title">数据看板</h1>
      
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.title" class="stat-card">
          <div class="stat-icon" :style="{ '--stat-color': stat.color }">
            {{ stat.icon }}
          </div>
          <div class="stat-content">
            <el-statistic
              :title="stat.title"
              :value="stat.value"
              :prefix="stat.prefix"
              :suffix="stat.suffix"
              :value-style="{ color: 'var(--color-text-primary)', fontSize: '1.75rem', fontWeight: 700 }"
            />
            <div class="stat-trend" :class="{ 'is-negative': stat.trend < 0 }">
              <span class="trend-icon">{{ stat.trend >= 0 ? '↑' : '↓' }}</span>
              <span class="trend-value">{{ Math.abs(stat.trend) }}%</span>
              <span class="trend-label">较上月</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="charts-grid">
        <div class="chart-card">
          <div class="chart-header">
            <h3 class="chart-title">访问趋势</h3>
            <div class="chart-stats">
              <el-statistic
                title="本月访问量"
                :value="10500"
                suffix="次"
                :value-style="{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: 600 }"
              />
            </div>
          </div>
          <div class="chart-container">
            <svg :width="svgWidth" :height="svgHeight" class="line-chart">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.2" />
                  <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
                </linearGradient>
              </defs>
              
              <g class="grid-lines">
                <line
                  v-for="i in 5"
                  :key="'h-' + i"
                  :x1="padding.left"
                  :x2="svgWidth - padding.right"
                  :y1="padding.top + (chartHeight / 5) * i"
                  :y2="padding.top + (chartHeight / 5) * i"
                  class="grid-line"
                />
              </g>
              
              <g class="y-axis">
                <text
                  v-for="i in 6"
                  :key="'y-' + i"
                  :x="padding.left - 10"
                  :y="padding.top + chartHeight - (chartHeight / 5) * (i - 1)"
                  class="axis-label"
                  text-anchor="end"
                >
                  {{ Math.round((maxValue / 5) * (i - 1)) }}
                </text>
              </g>
              
              <g class="x-axis">
                <text
                  v-for="(point, i) in points"
                  :key="'x-' + i"
                  :x="point.x"
                  :y="svgHeight - 10"
                  class="axis-label"
                  text-anchor="middle"
                >
                  {{ point.month }}
                </text>
              </g>
              
              <path :d="areaPath" class="area-path" />
              <path :d="linePath" class="line-path" />
              
              <g class="data-points">
                <circle
                  v-for="(point, i) in points"
                  :key="'point-' + i"
                  :cx="point.x"
                  :cy="point.y"
                  r="4"
                  class="data-point"
                />
              </g>
            </svg>
          </div>
        </div>
        
        <div class="chart-card">
          <div class="chart-header">
            <h3 class="chart-title">任务进度</h3>
          </div>
          <div class="progress-container">
            <div class="ring-progress">
              <svg viewBox="0 0 200 200" class="ring-svg">
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="rgba(0,0,0,0.1)"/>
                  </filter>
                </defs>
                <circle
                  v-for="(item, index) in progressData"
                  :key="index"
                  cx="100"
                  cy="100"
                  :r="80 - index * 15"
                  fill="none"
                  :stroke="item.color"
                  stroke-width="12"
                  :stroke-dasharray="getStrokeDashArray(item.value, 80 - index * 15)"
                  :stroke-dashoffset="getStrokeDashOffset(item.value, 80 - index * 15)"
                  stroke-linecap="round"
                  class="ring-segment"
                  :style="{ '--ring-color': item.color }"
                />
                <circle cx="100" cy="100" r="35" class="ring-center" />
              </svg>
              <div class="ring-center-content">
                <div class="ring-total">
                  <el-statistic
                    :value="75"
                    suffix="%"
                    :value-style="{ color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 700 }"
                  />
                </div>
                <div class="ring-label">总完成率</div>
              </div>
            </div>
            
            <div class="progress-legend">
              <div v-for="item in progressData" :key="item.label" class="legend-item">
                <span class="legend-dot" :style="{ '--legend-color': item.color }"></span>
                <span class="legend-label">{{ item.label }}</span>
                <span class="legend-value">{{ item.value }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="table-card">
        <div class="table-header">
          <h3 class="table-title">操作日志</h3>
          <el-button type="primary" size="small">导出日志</el-button>
        </div>
        <el-table
          :data="logs"
          height="400"
          style="width: 100%"
          v-loading="false"
        >
          <el-table-column prop="id" label="ID" width="80" fixed />
          <el-table-column prop="time" label="时间" width="180" />
          <el-table-column prop="user" label="用户" width="100" />
          <el-table-column prop="action" label="操作" min-width="150" />
          <el-table-column prop="status" label="状态" width="100">
            <template #default="{ row }">
              <el-tag :type="getStatusTag(row.status).type" size="small">
                {{ getStatusTag(row.status).text }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="ip" label="IP地址" width="140" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding: var(--spacing-lg);
  background: var(--color-bg-secondary);
  transition: background 0.3s ease;
}

.dashboard.is-dark {
  --color-bg-primary: #1e1e2e;
  --color-bg-secondary: #11111b;
  --color-bg-tertiary: #313244;
  --color-text-primary: #cdd6f4;
  --color-text-secondary: #a6adc8;
  --color-text-muted: #6c7086;
  --color-border: #313244;
  --card-bg: #1e1e2e;
  --card-border: #313244;
  --grid-line-color: rgba(255, 255, 255, 0.05);
  --axis-label-color: #6c7086;
}

.dashboard:not(.is-dark) {
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --grid-line-color: rgba(0, 0, 0, 0.05);
  --axis-label-color: #718096;
}

.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--card-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.stat-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  background: color-mix(in srgb, var(--stat-color) 15%, transparent);
  border-radius: var(--radius-lg);
}

.stat-content {
  flex: 1;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: 0.8125rem;
  color: #10b981;
}

.stat-trend.is-negative {
  color: #ef4444;
}

.trend-icon {
  font-weight: 600;
}

.trend-value {
  font-weight: 600;
}

.trend-label {
  color: var(--color-text-muted);
}

.charts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.chart-card {
  background: var(--card-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--card-border);
  padding: var(--spacing-lg);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.chart-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.chart-stats {
  text-align: right;
}

.chart-container {
  overflow-x: auto;
}

.line-chart {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.grid-line {
  stroke: var(--grid-line-color);
  stroke-width: 1;
}

.axis-label {
  font-size: 0.75rem;
  fill: var(--axis-label-color);
}

.area-path {
  fill: url(#areaGradient);
}

.line-path {
  fill: none;
  stroke: url(#lineGradient);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.data-point {
  fill: var(--card-bg);
  stroke: #3b82f6;
  stroke-width: 2;
  transition: all 0.2s ease;
}

.data-point:hover {
  r: 6;
  fill: #3b82f6;
}

.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
}

.ring-progress {
  position: relative;
  width: 200px;
  height: 200px;
}

.ring-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring-segment {
  transition: stroke-dashoffset 1s ease-in-out;
  filter: url(#shadow);
}

.ring-center {
  fill: var(--card-bg);
}

.ring-center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.ring-total {
  margin-bottom: 4px;
}

.ring-label {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.progress-legend {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  width: 100%;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 8px 12px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--legend-color);
}

.legend-label {
  flex: 1;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.legend-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.table-card {
  background: var(--card-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--card-border);
  padding: var(--spacing-lg);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.table-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

:deep(.el-table) {
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-table-header-bg-color: var(--color-bg-secondary);
  --el-table-row-hover-bg-color: var(--color-bg-secondary);
  --el-table-border-color: var(--color-border);
  --el-table-text-color: var(--color-text-primary);
  --el-table-header-text-color: var(--color-text-secondary);
}

:deep(.el-table th) {
  background: var(--color-bg-secondary) !important;
  font-weight: 600;
}

:deep(.el-table td) {
  border-bottom: 1px solid var(--color-border);
}

:deep(.el-table--striped .el-table__body tr.el-table__row--striped td) {
  background: var(--color-bg-secondary);
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard {
    padding: var(--spacing-md);
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-card {
    padding: var(--spacing-md);
  }
  
  .chart-card,
  .table-card {
    padding: var(--spacing-md);
  }
}
</style>
