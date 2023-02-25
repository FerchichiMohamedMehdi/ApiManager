import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  searchKey: string;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {}
  logout():void{
   
      // ou // localStorage.removeItem("state");
       localStorage.setItem("state","0");
       this.router.navigateByUrl("");
       
 
  }
   

}
