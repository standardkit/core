import { StateEnum } from '../enums';
import { StateType } from '../types';

export class State {
  constructor(private state: StateType = StateEnum.Initial) {}

  public onError(): void {
    this.state = StateEnum.Error;
  }

  public get isError(): boolean {
    return this.state === StateEnum.Error;
  }

  public onSuccess(): void {
    this.state = StateEnum.Success;
  }

  public get isSuccess(): boolean {
    return this.state === StateEnum.Success;
  }

  public onInitial(): void {
    this.state = StateEnum.Initial;
  }

  public get isInitial(): boolean {
    return this.state === StateEnum.Initial;
  }

  public onPending(): void {
    this.state = StateEnum.Pending;
  }

  public get isPending(): boolean {
    return this.state === StateEnum.Pending;
  }
}
