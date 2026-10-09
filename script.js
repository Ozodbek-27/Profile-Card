const themeBtn = document.getElementById('theme-btn')

// localStorage bloklangan bo'lsa ham sayt ishlashi uchun himoya
function getSavedTheme() {
	try {
		return localStorage.getItem('theme')
	} catch (error) {
		return null
	}
}

function saveTheme(theme) {
	try {
		localStorage.setItem('theme', theme)
	} catch (error) {
		// saqlab bo'lmadi, lekin sayt ishlashda davom etadi
	}
}

if (getSavedTheme() === 'dark') {
	document.body.classList.add('dark')
	themeBtn.textContent = 'Light mode'
}

themeBtn.addEventListener('click', function () {
	document.body.classList.toggle('dark')

	if (document.body.classList.contains('dark')) {
		themeBtn.textContent = 'Light mode'
		saveTheme('dark')
	} else {
		themeBtn.textContent = 'Dark mode'
		saveTheme('light')
	}
})
