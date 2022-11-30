import { ITaskHeader } from './ITaskHeader';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ItaskFooter';

export interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
