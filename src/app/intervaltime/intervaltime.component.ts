import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intervaltime',
  templateUrl: './intervaltime.component.html',
  styleUrls: ['./intervaltime.component.css']
})
export class IntervaltimeComponent implements OnInit {
  counter: any;
  timerRef : any;
  startText = 'Start';
  running: boolean = false;

  constructor(private common: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.playAudio();
    this.startTimer()
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "assets/stop.wav";
    audio.load();
    audio.play();
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        var str = this.counter.toString();
        str = str.slice(0, -3);
        this.counter = parseInt(str) || 0;
        if (this.counter == this.common.formData['repInterval']) {
          this.stopTimer()
        }
      });
    } else {
      clearInterval(this.timerRef);
    }
  }
  stopTimer() {
    this.counter = 0;
    clearInterval(this.timerRef);
    this.router.navigate(['/rep']);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

}
