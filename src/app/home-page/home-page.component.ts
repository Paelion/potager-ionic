import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

    email: string;
    password: string;

    constructor(public router: Router, public afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    login() {
        this.afAuth.signInWithEmailAndPassword(this.email, this.password).then((data) => {
            console.log(`congratulation you're in ! ${data}`);
        }, (err) => {
            alert(err);
        });
    }

    register(){

    }

    back(){
        this.router.navigateByUrl('login');
    }

}
