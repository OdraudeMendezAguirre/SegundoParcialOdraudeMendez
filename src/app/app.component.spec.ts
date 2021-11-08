import { AppComponent } from "./app.component";

describe('Boton Calcular',()=>{
  let link: AppComponent;
  link= new AppComponent();

  it('Debe obtener el enlace al index',() =>{  
    let r=link.getLink();
    expect(r).toBe('ui/ui.html');
});
})
