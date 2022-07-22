import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoComponent, TestHostComponent]
    })
      .compileComponents();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should have src as www.test.com', () => {
    expect(testHostFixture.nativeElement.querySelector('.card-image').src).toContain('www.test.com');
  });

  it('should have logo src as www.logo.com', () => {
    expect(testHostFixture.nativeElement.querySelector('.example-header-image').src).toContain('www.logo.com');
  });

  it('should have id as 0', () => {
    expect(testHostFixture.nativeElement.querySelector('mat-card-subtitle').innerText).toContain('0');
  });

  it('should have title as Test Title', () => {
    expect(testHostFixture.nativeElement.querySelector('mat-card-title').innerText).toEqual('Test Title');
  });

  @Component({
    selector: `host-component`,
    template: `<app-photo
                imgUrl="www.test.com"
                thumbnail="www.logo.com"
                id="0"
                title="Test Title"

                ></app-photo>`
  })
  class TestHostComponent {
  }

});
