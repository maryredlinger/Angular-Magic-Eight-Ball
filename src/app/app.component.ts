import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heyThere () {
    window.alert('hey')
  }

  shakeBall() {
    var num = Math.floor(Math.random() * 7)

    if(num === 0){
      window.alert("better luck next time")
    }if(num === 1){
      window.alert("thats a no")
    }if(num === 2){
      window.alert("yes yes yes")
    }if(num === 3){
      window.alert("COVID-19 says most likely")
    }if(num === 4){
      window.alert("ask again")
    }if(num === 5){
      window.alert("you should google that")
    }if(num === 6){
      window.alert("ummm sure?")
    }if(num === 7){
      window.alert("thats a definite maybe i think probably")
    }
  }
}
