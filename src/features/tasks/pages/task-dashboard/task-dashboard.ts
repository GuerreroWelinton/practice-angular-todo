import { JsonPipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from '@core/services/api/auth.service';
import { TaskService } from '@core/services/api/task.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'task-dashboard',
  imports: [ButtonModule, JsonPipe],
  templateUrl: './task-dashboard.html',
  styleUrl: './task-dashboard.css',
})
export class TaskDashboard implements OnInit {
  authService = inject(AuthService);
  taskService = inject(TaskService);

  username = this.authService.username;
  tasks = this.taskService.tasks;
  totalTasks = this.taskService.tasksCount;
  completedTasks = this.taskService.completedTasksCount;
  pendingTasks = this.taskService.pendingTasksCount;

  ngOnInit() {
    this.taskService.loadTasks();
  }
}
