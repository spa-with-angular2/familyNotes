import { Component } from '@angular/core';

@Component({
    selector: 'no-content',
    template: `
        <div class="container">
            <div class="boo-wrapper">
                <h1>Whoops!</h1>
                <p>
                    We couldn't find the page you
                    <br /> were looking for.
                </p>
            </div>
        </div>`,
    styles: [`
        .container {
            font-family: 'Varela Round', sans-serif;
            color: $booFaceColor;
            position: relative;
            height: 100vh;
            text-align: center;
            font-size: $jaggedDistance / 2;
            h1 {
                font-size: $jaggedDistance;
                margin-top: $jaggedDistance;
            }
        }
        .boo-wrapper {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding-top: $jaggedDistance * 2;
            padding-bottom: $jaggedDistance * 2;`]})
export class NoContentComponent{
}