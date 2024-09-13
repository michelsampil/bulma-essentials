export function initForm() {
  const formContainer = document.querySelector("#form .column");
  const formElement = `
        <form>
            <!-- Name Field -->
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith" required>
                </div>
            </div>

            <!-- Email Field -->
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" required>
                </div>
            </div>

            <!-- Subject Field -->
            <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                        <select>
                            <option>Select subject</option>
                            <option>General Inquiry</option>
                            <option>Support</option>
                            <option>Feedback</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Message Field -->
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Your message here" required></textarea>
                </div>
            </div>

            <!-- File Upload Field -->
            <div class="field">
                <label class="label">File Upload</label>
                <div class="control">
                    <div class="file has-name">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Choose a file…
                                </span>
                            </span>
                            <span class="file-name">
                                No file uploaded
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Checkbox -->
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" required>
                        I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>

            <!-- Radio Buttons -->
            <div class="field">
                <label class="label">Preferred Contact Method</label>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="contactMethod" value="email" required>
                        Email
                    </label>
                    <label class="radio">
                        <input type="radio" name="contactMethod" value="phone">
                        Phone
                    </label>
                </div>
            </div>

            <!-- Date Field -->
            <div class="field">
                <label class="label">Appointment Date</label>
                <div class="control">
                    <input class="input" type="date" required>
                </div>
            </div>

            <!-- Range Slider -->
            <div class="field">
                <label class="label">Satisfaction Level</label>
                <div class="control">
                    <input class="input" type="range" min="0" max="10">
                </div>
            </div>

            <!-- Submit Button -->
            <div class="field">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
            </div>
        </form>
    `;
  formContainer.innerHTML = formElement;

  // Handle file input label change
  const fileInput = document.querySelector(".file-input");
  const fileName = document.querySelector(".file-name");

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileName.textContent = fileInput.files[0].name;
    }
  });
}
