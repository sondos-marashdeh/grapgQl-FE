import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphQlService } from './graph-ql.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ GraphQlService   ]
})
export class AppComponent {
  title = 'graphQl';
  books: any = [];
  constructor(private graphQlService: GraphQlService) {

  }
  getBooks() {

    const query = `
    {
    getBooks { 
      name
      author
      year
      category
      }    
    }
    `
    this.graphQlService.query(query).subscribe((res:any) => {
      this.books = res.data.getBooks;
    })
  }
}
