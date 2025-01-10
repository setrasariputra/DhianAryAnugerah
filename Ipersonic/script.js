class PersonalityQuiz {
    constructor() {
        this.init();
    }

    init() {
        this.displayDropdownTopMenu();
        this.displayFooter();
        this.displayQuizOptions();
    }

    displayDropdownTopMenu() {

    }

    displayFooter() {
        let footerHTML = '<p>© iPersonic <a href="#">Personality Test</a> <a href="#">Career Test</a> <a href="#">Persönlichkeitstest</a> <a href="#">Berufstest</a> <a href="#">Privacy Policy</a> <a href="#">Felicitas Heyne</a> <a href="#">Impressum</a> <a href="#">Help & Contact</a>   iPersonic supports <a href="#">Audiopedia Foundation</a></p>';
        footerHTML += '<p>English | Deutsch | Español | Français | Português | 中文 | Русский | हिंदी | العربية | 日本語 | Bahasa Indonesia | Italiano | Svenska | Nederlands | עברית | Afrikaans | Bosanski | Català | Čeština | Hrvatski | Magyar | Română | Slovenski | Slovenský | Srpski | Български</p>';
        
        const footerContainer = document.querySelector('.footer-container');
        footerContainer.innerHTML = footerHTML;
    }

    displayQuizOptions() {
        
    }

    saveQuizAnswer() {

    }
}

new PersonalityQuiz();