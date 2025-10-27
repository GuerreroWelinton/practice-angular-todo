import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { Task } from '@core/interfaces/api/task.interface';
import { LOCAL_STORAGE_KEYS } from '@core/constants/local-storage.constant';

@Injectable({ providedIn: 'root' })
export class TaskService {
  #userService = inject(AuthService);

  // #http = inject(HttpClient);

  #tasks = signal<Task[]>([]);
  readonly tasks = this.#tasks.asReadonly();
  readonly tasksCount = computed(() => this.#tasks().length);
  readonly completedTasksCount = computed(
    () => this.#tasks().filter((task) => task.completed).length,
  );
  readonly pendingTasksCount = computed(
    () => this.#tasks().filter((task) => !task.completed).length,
  );

  #validateTask(task: Partial<Task>) {
    if (this.#userService.user() === null) {
      throw new Error('User not authenticated');
    }

    if (!task.title || task.title.trim().length === 0) {
      throw new Error('The title is required');
    }

    if (this.#tasks().some((t) => t.title === task.title)) {
      throw new Error('A task with this title already exists');
    }

    if (task.title.length > 50) {
      throw new Error('The title cannot be more than 50 characters');
    }

    if (task.description && task.description.length > 200) {
      throw new Error('The description cannot be more than 200 characters');
    }

    return task;
  }

  createTask(task: Partial<Task>) {
    const validatedTask = this.#validateTask(task);
  }

  loadTasks() {
    const tasksData = localStorage.getItem(LOCAL_STORAGE_KEYS.TASKS);
    if (tasksData) {
      const tasks: Task[] = JSON.parse(tasksData);
      this.#tasks.set(tasks);
    } else {
      // TODO: remove this mock data
      this.#tasks.set([
        {
          id: '1',
          title: 'Sample Task 1',
          description: 'This is a sample task',
          completed: false,
          createdAt: new Date(),
        },
      ]);
    }
  }
}
