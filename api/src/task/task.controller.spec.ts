import { Test } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskDto } from '../Dto/TaskDto';

describe('TaskController', () => {
  let tasksController: TaskController;
  let tasksService: TaskService;

  const mockTasksService = {
    getTasks: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    tasksController = moduleRef.get<TaskController>(TaskController);
    tasksService = moduleRef.get<TaskService>(TaskService);
  });

  describe('GetTasks', () => {
    it('should return an array of tasks', async () => {
      const result: TaskDto[] = [
        {
          id: 1,
          title: 'Test Task',
          description: 'Test Description',
          section: 'NonUrgentImportant',
          status: 'pending',
          startDate: new Date(),
          endDate: new Date(),
          dueDate: new Date(),
          isCompleted: false,
          userId: 1,
          tags: [],
          history: [],
        },
      ];

      tasksService.getTasks = jest.fn().mockResolvedValue(result);

      const tasks = await tasksController.getTasks();
      expect(tasks).toEqual(result);
    });
  });
  describe('GetTaskById', () => {
    it('should return a task', async () => {
      const result: TaskDto = {
        id: 1,
        title: 'Test Task',
        description: 'Test Description',
        section: 'NonUrgentImportant',
        status: 'pending',
        startDate: new Date(),
        endDate: new Date(),
        dueDate: new Date(),
        isCompleted: false,
        userId: 1,
        tags: [],
        history: [],
      };

      tasksService.getTaskById = jest.fn().mockResolvedValue(result);
      const task = await tasksController.getTaskById('1');
      expect(task).toEqual(result);
      expect(tasksService.getTaskById).toHaveBeenCalledWith(1);
    });

    it('should throw an error if task not found', async () => {
      const result: TaskDto = {
        id: 99,
        title: 'Test Task',
        description: 'Test Description',
        section: 'NonUrgentImportant',
        status: 'pending',
        startDate: new Date(),
        endDate: new Date(),
        dueDate: new Date(),
        isCompleted: false,
        userId: 1,
        tags: [],
        history: [],
      };
      tasksService.getTaskById = jest.fn().mockResolvedValue(result);
      await tasksController.getTaskById('1');
      expect(tasksService.getTaskById).toHaveBeenCalledWith(999);
    });
  });
});
