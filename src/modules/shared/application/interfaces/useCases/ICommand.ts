export interface ICommand<Input> {
  execute(input: Input): void;
}
