function searchProfile() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const profiles = document.querySelectorAll('#people-list li');
    
    profiles.forEach(profile => {
        const name = profile.querySelector('h3').textContent.toLowerCase();
        const isHidden = profile.classList.contains('hidden-profile');

        if (!isHidden) {
            if (name.includes(searchInput)) {
                profile.style.display = 'flex';
            } else {
                profile.style.display = 'none';
            }
        } else {
            if (searchInput.length > 2 && (name.includes(searchInput) || searchInput === "gery","gry","geri","gri","gryrmd"))  {
                profile.style.display = 'flex';
            } else {
                profile.style.display = 'none';
            }
        }
    });
}
