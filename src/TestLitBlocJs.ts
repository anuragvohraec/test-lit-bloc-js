import {Bloc, BlocsProvider, BlocBuilder} from 'lit-bloc-js';
import {html} from 'lit-html';

export class CounterBloc extends Bloc<number>{

  constructor(){
      super(0);
  }

  increment(){
      let n = this.state;
      n++;
      this.emit(n);
  }

  decrement(){
      let n = this.state;
      n--;
      this.emit(n);
  }
}

export class CounterBlocProvider extends BlocsProvider{
  constructor(){
      super([new CounterBloc()]);
  }

  builder(){
      return html`<div><slot></slot></div>`;
  }
}


export class CounterBlocBuilder extends BlocBuilder<CounterBloc, number>{
  constructor(){
      super(CounterBloc);
  }

  increment=()=>{
    this.bloc?.increment();
  }

  decrement=()=>{
    this.bloc?.decrement();
  }

  builder(state: number){
      return html`
      <div>Current state is : ${state}</div>
      <div><button @click=${this.increment}>increment</button></div>
      <div><button @click=${this.decrement}>decrement</button></div>
      `;
  }
}

