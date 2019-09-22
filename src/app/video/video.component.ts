import { Component, OnInit, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoService } from '../services/video.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit {

  syllabus: any;
  quiz: any;
  courses: any;
  youtubeURL: any;
  topic: any;
  bookId: number;
  lessonId: number;
  disableNext = false;
  disablePrev = true;

  result = false;
  message: string;
  answer: string;
  first1: string;

  contactForm: FormGroup;
  disabledSubmitButton = true;
  optionsSelect: Array<any>;
  map = new Map();

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.bookId = +params['bookid'];
      this.lessonId = +params['lessonid'];
    });
    // console.log('BookId:::' + this.bookId + ' LessonId:: ' + this.lessonId);
    this.onIndexClick(this.bookId);
  }

  onIndexClick(bookId) {
    this.bookId = bookId;

    if (this.bookId === 1) {

      this.youtubeURL = 'https://www.youtube.com/embed/RXLwATGwQ-M';
      this.topic = 'Arabic Alphabets';
      this.bookId = 1;
      this.lessonId = 1;

      this.videoService.getMABook1()
        .subscribe((data) => {
          this.syllabus = data;
        });

      this.disableNext = false;
      this.disablePrev = true;

    } else if (this.bookId === 2) {

      this.youtubeURL = 'https://www.youtube.com/embed/CBnMfwLI9ow';
      this.topic = 'LESSON ON إنَّ';
      this.bookId = 2;
      this.lessonId = 1;

      this.videoService.getMABook2()
        .subscribe((data) => {
          this.syllabus = data;
        });

      this.disableNext = false;
      this.disablePrev = false;

    } else if (this.bookId === 3) {

      this.youtubeURL = 'https://www.youtube.com/embed/6QZx8Rz16lI';
      this.topic = 'Continuing lesson no 26';
      this.bookId = 3;
      this.lessonId = 1;

      this.videoService.getMABook3()
        .subscribe((data) => {
          this.syllabus = data;
        });

      this.disableNext = true;
      this.disablePrev = false;

    } else if (this.bookId <= 1 || this.bookId >= 4) {

      this.syllabus = this.videoService.getMABook1();

      this.youtubeURL = 'https://www.youtube.com/embed/RXLwATGwQ-M';
      this.topic = 'Arabic Alphabets';
      this.bookId = 1;
      this.lessonId = 1;
    }
    // this.videoService.getMABQuiz(this.bookId, this.lessonId)
    //   .subscribe((data) => {
    //     this.quiz = data;
    //   });
  }

  constructor(private meta: Meta, private title: Title, private route: ActivatedRoute,
    private videoService: VideoService, private fb: FormBuilder) {

  }

  onSelectionChange(quizId, value) {
    this.first1 = '';
    // console.log(quizId, value);
    this.map.set(quizId, value);
  }

  onClick(bookId: any, lesson: any) {
    // console.log(bookId + ' ' + lesson);

    this.youtubeURL = lesson.youtubeURL;
    this.topic = lesson.topic;
    this.bookId = bookId;
    this.lessonId = lesson.lessonId;

    // this.videoService.getMABQuiz(bookId, lesson.lessonId)
    //   .subscribe((data) => {
    //     this.quiz = data;
    //   });
  }

  onSubmit() {
    console.log(this.map);
    this.result = true;

    // for (const quiz of this.quiz) {
    //   const userValue =  this.map.get(quiz.quizId);
    //   if (userValue === quiz.answer) {
    //     this.answer = quiz.answer;
    //     this.message = quiz.message;
    //   } else {
    //     this.answer = quiz.answer;
    //     this.message = quiz.message;
    //   }
    // }
    this.map.clear();
  }
}
