import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/star.module';

import { CoursesInfoComponent } from './courses-info/courses-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseListComponent,
    CoursesInfoComponent,


  ], imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([

      {
        path: 'courses', component: CourseListComponent
      }, {
        path: 'courses/info/:id', component: CoursesInfoComponent
      },
    ]
    )
  ]

})
export class CourseModule {

}
