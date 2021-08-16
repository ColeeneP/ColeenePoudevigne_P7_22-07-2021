import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html'
})
export class ModifyProfileComponent implements OnInit {

  url: any;

  public modifyForm: FormGroup;
  private file: File;
  @Output() modifiedProfile = new EventEmitter<boolean>();
  private getOneProfil: [];

  constructor(private userService: UserService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.getProfil()
      this.modifyForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.minLength(2)]),
        firstname: this.formBuilder.control('', [Validators.minLength(2)]),
        email: this.formBuilder.control('', [Validators.email]),
        bio: this.formBuilder.control('', [Validators.maxLength(255)]),
        img: this.formBuilder.control('')
      })
  }

  getProfil(): void {
    this.userService.getProfil().subscribe(userProfil => {
    this.getOneProfil = userProfil})
}

  onModifyProfil() {
    const name = this.modifyForm.get('name').value;
    const firstname = this.modifyForm.get('firstname').value;
    const email = this.modifyForm.get('email').value;
    const bio = this.modifyForm.get('bio').value;
    const imgProfile = this.file;
  this.userService.modifyProfil(name, firstname, email, bio, imgProfile).subscribe(() => this.modifiedProfile.emit(true))
  }

  public delete(){
    this.url = null;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

}
