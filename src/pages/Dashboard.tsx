import React, { useMemo, useState } from "react"
import { MOCK_PROJECTS, STAGES, STAGE_DESCRIPTIONS, Project } from "../mock/data"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Check, TrendingUp, Activity, Award, PackageCheck, Search, Clock, AlertCircle, UserCircle2 } from "lucide-react"
import { cn } from "../lib/utils"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const stats = useMemo(() => {
    const newOpps = MOCK_PROJECTS.filter(p => p.stage === "商机").length;
    const following = MOCK_PROJECTS.filter(p => p.status === "跟进中").length;
    const won = MOCK_PROJECTS.filter(p => p.stage === "中标" || p.stage === "报单" || p.stage === "装机" || p.stage === "验机").length;
    const completed = MOCK_PROJECTS.filter(p => p.stage === "验机").length;
    return { newOpps, following, won, completed };
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchTerm) return MOCK_PROJECTS;
    return MOCK_PROJECTS.filter(p => 
      p.name.includes(searchTerm) || 
      p.hospital.includes(searchTerm) || 
      p.manager.includes(searchTerm) ||
      p.currentHandler.includes(searchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">工作台</h2>
      </div>
      
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">新增商机</CardTitle>
            <TrendingUp className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{stats.newOpps}</div>
            <p className="text-sm text-muted-foreground mt-1">当前所有商机阶段项目</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">跟进中项目</CardTitle>
            <Activity className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">{stats.following}</div>
            <p className="text-sm text-muted-foreground mt-1">需要销售持续推进</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">已中标及以上</CardTitle>
            <Award className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-500">{stats.won}</div>
            <p className="text-sm text-muted-foreground mt-1">进入交付与回款流程</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">完成验机项目</CardTitle>
            <PackageCheck className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">{stats.completed}</div>
            <p className="text-sm text-muted-foreground mt-1">已完成最终交付</p>
          </CardContent>
        </Card>
      </div>

      {/* Project Stages Visualization */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium tracking-tight">项目跟进情况大盘</h3>
            <p className="text-base text-muted-foreground mt-1">直观掌握项目当前在哪一步，由谁负责，是否出现停滞</p>
          </div>
          
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索项目/医院/经办人..."
              className="w-full bg-background rounded-md border border-input pl-10 pr-4 py-2.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Card className="overflow-hidden border-border/50 shadow-sm">
          {/* Table Header like */}
          <div className="bg-muted/30 px-6 py-4 border-b text-sm font-medium text-muted-foreground flex items-center gap-8 hidden md:flex">
            <div className="w-[340px] shrink-0">项目基本信息</div>
            <div className="flex-1 text-center">各阶段明细及负责人流转状态</div>
          </div>
          
          <div className="divide-y">
            {filteredProjects.length === 0 ? (
              <div className="p-8 text-center text-lg text-muted-foreground">
                未找到匹配的项目
              </div>
            ) : (
              filteredProjects.map(project => (
                <ProjectPipelineRow key={project.id} project={project} />
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

function ProjectPipelineRow({ project }: { project: Project }) {
  const currentStageIndex = STAGES.indexOf(project.stage);
  
  return (
    <div className="p-6 flex flex-col md:flex-row md:items-center gap-8 hover:bg-muted/30 transition-colors group">
      {/* Project Info */}
      <div className="flex-shrink-0 md:w-[340px] space-y-3">
        <div className="flex items-start justify-between gap-3">
          <span className="font-bold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2" title={project.name}>
            {project.name}
          </span>
          <Badge variant={
            project.status === "丢单" ? "destructive" :
            project.status === "已完成" ? "success" :
            project.isStuck ? "destructive" :
            project.status === "跟进中" ? "warning" : 
            project.status === "暂停" ? "secondary" : "default"
          } className="text-xs h-6 px-2.5 whitespace-nowrap shrink-0 flex items-center gap-1.5">
            {project.isStuck && project.status !== "丢单" && project.status !== "暂停" && <AlertCircle className="w-3.5 h-3.5" />}
            {project.isStuck && project.status !== "丢单" && project.status !== "暂停" ? "卡滞预警" : project.status}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="truncate font-medium text-foreground/80" title={project.hospital}>{project.hospital}</span>
          </div>
          
          {/* 添加整体状态说明 */}
          <div className={cn(
             "p-2 rounded-md bg-muted/50 flex items-center gap-2",
             project.isStuck ? "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400" : ""
          )}>
            <UserCircle2 className="w-4 h-4 shrink-0" />
            <span className="truncate">当前由 <strong className="font-semibold">{project.currentHandler}</strong> 处理</span>
            <span className="shrink-0 flex items-center gap-1.5 ml-auto font-medium">
              <Clock className="w-3.5 h-3.5" />
              停留 {project.daysInCurrentStage} 天
            </span>
          </div>
        </div>
      </div>
      
      {/* Stepper Visualization */}
      <div className="flex-1 pb-8 pt-8 md:pb-4 md:pt-6">
        <div className="flex items-start justify-between w-full px-4 relative">
          {STAGES.map((stage, index) => {
            const isCompleted = index < currentStageIndex;
            const isCurrent = index === currentStageIndex;
            
            // Highlight color based on status if current
            let currentColorClass = "bg-background border-primary text-primary";
            if (isCurrent) {
               if (project.status === "丢单") currentColorClass = "bg-background border-destructive text-destructive";
               else if (project.status === "暂停") currentColorClass = "bg-background border-muted-foreground text-muted-foreground";
               else if (project.status === "已完成") currentColorClass = "bg-background border-success text-success";
               else if (project.isStuck) currentColorClass = "bg-red-50 border-destructive text-destructive";
            }

            return (
              <React.Fragment key={stage}>
                <div className="flex flex-col items-center relative z-10 w-20 group/step cursor-help">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 shadow-sm bg-background",
                    isCompleted ? "bg-primary border-primary text-primary-foreground" : 
                    isCurrent ? currentColorClass + " ring-4 ring-primary/10 ring-offset-2" : 
                    "border-muted text-muted-foreground"
                  )}>
                    {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  
                  {/* 阶段名称 */}
                  <span className={cn(
                    "mt-3 text-sm whitespace-nowrap transition-all duration-300",
                    isCurrent ? "font-bold text-foreground" : "text-muted-foreground/80 font-medium",
                    isCompleted && "text-foreground/90 font-medium",
                    isCurrent && project.isStuck && "text-destructive"
                  )}>
                    {stage}
                  </span>

                  {/* 若是当前卡住/停留的阶段，显示经办人和天数小标签 */}
                  {isCurrent && (
                     <div className={cn(
                       "absolute -top-8 whitespace-nowrap text-xs px-2 py-1 rounded-md border shadow-sm flex items-center gap-1.5",
                       project.isStuck ? "bg-red-100 border-red-200 text-red-700 font-semibold" : "bg-primary/10 border-primary/20 text-primary font-medium"
                     )}>
                       {project.isStuck && <AlertCircle className="w-3.5 h-3.5" />}
                       {project.currentHandler}
                     </div>
                  )}

                  {/* CSS Tooltip 悬浮提示：说明该阶段是干嘛的 */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 p-3 bg-popover text-popover-foreground border shadow-lg rounded-lg text-sm leading-relaxed opacity-0 invisible group-hover/step:opacity-100 group-hover/step:visible transition-all z-50 pointer-events-none">
                    <div className="font-bold mb-1.5 text-primary text-base">{stage}阶段任务：</div>
                    <div className="text-muted-foreground">{STAGE_DESCRIPTIONS[stage]}</div>
                  </div>
                </div>
                
                {index < STAGES.length - 1 && (
                  <div className="flex-1 relative h-[3px] mx-2 mt-4 flex items-center">
                    <div className={cn(
                      "absolute inset-0 transition-all duration-500 rounded-full",
                      index < currentStageIndex ? "bg-primary" : "bg-border"
                    )} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  )
}
