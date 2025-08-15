// Helper function to format dates consistently
function formatDateForAPI(date) {
    if (!date || !(date instanceof Date)) {
        console.error('Invalid date provided to formatDateForAPI:', date);
        return null;
    }
    
    // Ensure we get YYYY-MM-DD format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// Motorcycle data with complete information
const motorcycles = [
    {
        id: 1,
        name: "KTM 890 Adventure R",
        images: [
            "images/IMG_4061.JPEG",
			"images/IMG_4060.JPEG",
			"images/IMG_4062.JPEG"
        ],
        category: "Adventure Enduro",
        engine: "889cc",
        power: "105KM", 
        description: "Motocykl adventure enduro stworzony do podróży w każdym terenie. Dynamiczny, lekki i gotowy na długie wyprawy.",
        extendedDescription: "KTM 890 Adventure R to motocykl, który łączy w sobie komfort długodystansowego turystyka z możliwościami rasowej maszyny terenowej.Dzięki mocnemu, 2-cylindrowemu silnikowi o pojemności 890 cm³ oraz zaawansowanemu zawieszeniu WP XPLOR, sprosta zarówno asfaltowym serpentynom, jak i wymagającym trasom off-road.Wyposażony w nowoczesne systemy bezpieczeństwa (ABS na zakrętach, kontrolę trakcji, tryby jazdy) daje pewność prowadzenia w każdych warunkach.To idealny wybór dla podróżników, którzy chcą poczuć smak przygody bez kompromisów.",
        basePrice: 400,
        price: "od 120 zł / dzień",
        features: ["ABS", "Kontrola Trakcji", "Quickshifter", "Światła LED", "Cyfrowe zegary", "Opony ADV 50:50"],
        specifications: {
            "Moc": "105 KM przy 8000 obr/min",
            "Moment obrotowy": "100 Nm przy 6500 obr/min", 
            "Masa": "196 kg",
            "Zbiornik paliwa": "20 l",
            "Wysokość kanapy": "880 mm",
            "Typ silnika": "rzędowy, 2-cylindrowy, 4-suwowy"
        },
        conditions: ["Minimum 24 lata", "Prawo jazdy kat. A", "Depozyt: 2000 zł"]
    },
    {
        id: 2,
        name: "BMW R 1200 GS Adventure", 
        images: [
            "images/IMG_5422.JPEG",
			"images/IMG_5428.JPEG",
			"images/IMG_5429.JPEG",
			"images/IMG_5433.JPEG",
			"images/IMG_5442.JPEG",
        ],
        category: "Adventure Road",
        engine: "1170cc",
        power: "125KM",
        description: "Legendarny motocykl adventure gotowy na każdą trasę. Idealny do długich podróży po asfalcie.",
        extendedDescription: "BMW R 1200 GS Adventure to kwintesencja motocykla adventure. Wyposażony w najnowocześniejsze technologie i systemy bezpieczeństwa, jest gotowy na każde wyzwanie. Duże kufry, regulowane zawieszenie i doskonały komfort jazdy czynią go idealnym towarzyszem długich wypraw.",
        basePrice: 500,
        price: "od 160 zł / dzień", 
        features: ["ABS", "Kontrola trakcji", "Quickshifter", "Aktywne zawieszenie EPS", "Kufry", "Opony szosowe"],
        specifications: {
            "Moc": "125 KM przy 7750 obr/min",
            "Moment obrotowy": "149 Nm przy 6500 obr/min",
            "Masa": "268 kg", 
            "Zbiornik paliwa": "20 l",
            "Wysokość siodełka": "850/870 mm",
            "Typ silnika": "2-cylindrowy boxer"
        },
        conditions: ["Minimum 24 lata", "Prawo jazdy kat. A", "Depozyt: 2000 zł"]
    },
    {
        id: 3,
        name: "KTM EXC-F 350 Rally Replica",
        images: [
            "images/IMG_4725.JPEG",
        ], 
        category: "Enduro Rally",
        engine: "349cc",
        power: "54KM",
        description: "Motocykl enduro klasy mistrzowskiej, idealny do szybkiej jazdy w terenie i rajdów. Lekki, z dynamicznym silnikiem i zaawansowanym zawieszeniem.",
        extendedDescription: "KTM EXCF 350 2023 Rally Replica to lekki i szybki motocykl enduro przeznaczony dla zawodników i pasjonatów wymagających maksymalnej wydajności. Wyposażony w nowoczesny, jednocylindrowy silnik o pojemności 350 cm³, zapewnia idealne połączenie mocy i kontroli na trudnych trasach rajdowych. Zawieszenie WP XACT oraz precyzyjne hamulce Brembo pozwalają na pewność prowadzenia nawet w najtrudniejszych warunkach terenowych. Motocykl wyposażono także w nowoczesne elektroniczne wsparcie, takie jak systemy kontroli trakcji i mapy silnika, co czyni go doskonałym wyborem do wyczynowej jazdy i długodystansowych rajdów off-road.",
        basePrice: 500,
        price: "od 150 zł / dzień",
        features: ["Kontrola trakcji", "Wieża do nawigacji", "Uchwyt na tablet", "Wysoka szyba", "Agresywne opony terenowe", "Regulowane zawieszenie WP", "Światła LED"],
        specifications: {
            "Moc": "54 KM",
            "Moment obrotowy": "35 Nm",
            "Masa": "105 kg",
            "Zbiornik paliwa": "9 l", 
            "Wysokość kanapy": "970 mm",
			"Zawieszenie": "WP XACT, regulowane",
            "Typ silnika": "1-cylindrowy, 4-suwowy",
			"Elektronika": "kontrola trakcji, mapy silnika"
        },
        conditions: ["Minimum 24 lata", "Prawo jazdy kat. A", "Depozyt: 2000 zł"]
    },
    {
        id: 4,
        name: "Surron Light Bee 1LE", 
        images: [
            "images/surron.jpeg",
        ],
        category: "Elektryczny",
        engine: "Elektryczny", 
        power: "3kW",
        description: "SurRon Light Bee 1LE to elektryczny motocykl o nowoczesnym wyglądzie, idealny do miejskiej jazdy i lekkiego off-roadu. Cichy, lekki i przyjazny środowisku.",
        extendedDescription: "SurRon Light Bee 1LE to innowacyjny, elektryczny motocykl, który łączy w sobie wyjątkową zwrotność i ekologiczną technologię. Doskonale sprawdzi się zarówno w mieście, jak i na nierównym terenie dzięki lekkiej konstrukcji i mocnemu silnikowi elektrycznemu. Jego nowoczesny design i łatwość obsługi czynią go idealnym wyborem dla osób szukających dynamicznej, cichej jazdy bez emisji spalin. Bateria o dużej pojemności zapewnia satysfakcjonujący zasięg, a szybkie ładowanie umożliwia sprawne użytkowanie na co dzień.",
        basePrice: 300,
        price: "od 90 zł / dzień",
        features: ["Na prawo jazdy kat. B", "Elektryczny, cichy napęd", "LED"],
        specifications: {
            "Moc": "3 kW",
            "Max prędkość": "60km/h",
            "Masa": "50 kg",
            "Zasięg": "do 60 km na jednym ładowaniu",
            "Wysokość kanapy": "790 mm", 
            "Typ silnika": "elektryczny"
        },
        conditions: ["Minimum 18 lat", "Prawo jazdy kat. B", "Depozyt: 1000 zł"]
    },
];

// Calendar state
let currentDate = new Date();
let selectedStartDate = null;
let selectedEndDate = null;
let selectedPickupTime = null;
let selectedReturnTime = null;
let currentMotorcycle = null;

// Image gallery state
let galleryImageIndices = {};
let modalImageIndex = 0;
let currentModalMotorcycle = null;

// Polish month names
const monthNames = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
];

const dayNames = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'];

// Time slots configuration
const timeSlots = {
    weekday: {
        evening: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']
    },
    weekend: {
        morning: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'],
        evening: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']
    }
};

// Holiday periods (example dates)
const holidays = [
    '2024-12-24', '2024-12-25', '2024-12-26', '2024-12-31',
    '2025-01-01', '2025-01-06', '2025-04-20', '2025-04-21',
    '2025-05-01', '2025-05-03', '2025-06-08', '2025-06-19',
    '2025-08-15', '2025-11-01', '2025-11-11'
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery image indices
    motorcycles.forEach(motorcycle => {
        galleryImageIndices[motorcycle.id] = 0;
    });
    
    renderMotorcycles();
    setupEventListeners();
    renderCalendar();
});

// Generate time options based on date
function generateTimeOptions(date, type = 'pickup') {
    const dayOfWeek = date.getDay();
    const dateString = date.toISOString().split('T')[0];
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = holidays.includes(dateString);
    
    let availableTimes = [];
    
    if (isWeekend || isHoliday) {
        availableTimes = [...timeSlots.weekend.morning, ...timeSlots.weekend.evening];
    } else {
        availableTimes = timeSlots.weekday.evening;
    }
    
    return availableTimes;
}

// Get time slots organized by morning/evening for a specific date
function getTimeSlotsForDate(date) {
    const dayOfWeek = date.getDay();
    const dateString = date.toISOString().split('T')[0];
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = holidays.includes(dateString);
    
    if (isWeekend || isHoliday) {
        return {
            morning: [...timeSlots.weekend.morning],
            evening: [...timeSlots.weekend.evening]
        };
    } else {
        return {
            morning: [],
            evening: [...timeSlots.weekday.evening]
        };
    }
}

// Populate time dropdowns
function populateTimeDropdowns() {
    const pickupTimeSelect = document.getElementById('pickupTime');
    const returnTimeSelect = document.getElementById('returnTime');
    
    if (!pickupTimeSelect || !returnTimeSelect) return;
    
    // Clear existing options but keep optgroups
    pickupTimeSelect.innerHTML = '<option value="">Wybierz godzinę</option><optgroup label="Godziny poranne (7:00 - 11:00)"></optgroup><optgroup label="Godziny wieczorne (18:00 - 22:00)"></optgroup>';
    returnTimeSelect.innerHTML = '<option value="">Wybierz godzinę</option><optgroup label="Godziny poranne (7:00 - 11:00)"></optgroup><optgroup label="Godziny wieczorne (18:00 - 22:00)"></optgroup>';
    
    if (!selectedStartDate || !selectedEndDate) return;
    
    // Get time slots for pickup date
    const pickupDateSlots = getTimeSlotsForDate(selectedStartDate);
    
    // Populate pickup times
    if (pickupDateSlots.morning.length > 0) {
        const morningGroup = pickupTimeSelect.querySelector('optgroup[label="Godziny poranne (7:00 - 11:00)"]');
        pickupDateSlots.morning.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            morningGroup.appendChild(option);
        });
    } else {
        // Hide empty morning group for weekdays
        const morningGroup = pickupTimeSelect.querySelector('optgroup[label="Godziny poranne (7:00 - 11:00)"]');
        morningGroup.style.display = 'none';
    }
    
    if (pickupDateSlots.evening.length > 0) {
        const eveningGroup = pickupTimeSelect.querySelector('optgroup[label="Godziny wieczorne (18:00 - 22:00)"]');
        pickupDateSlots.evening.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            eveningGroup.appendChild(option);
        });
    }
    
    // Get time slots for return date
    const returnDateSlots = getTimeSlotsForDate(selectedEndDate);
    
    // Populate return times
    if (returnDateSlots.morning.length > 0) {
        const morningGroup = returnTimeSelect.querySelector('optgroup[label="Godziny poranne (7:00 - 11:00)"]');
        returnDateSlots.morning.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            morningGroup.appendChild(option);
        });
    } else {
        // Hide empty morning group for weekdays
        const morningGroup = returnTimeSelect.querySelector('optgroup[label="Godziny poranne (7:00 - 11:00)"]');
        morningGroup.style.display = 'none';
    }
    
    if (returnDateSlots.evening.length > 0) {
        const eveningGroup = returnTimeSelect.querySelector('optgroup[label="Godziny wieczorne (18:00 - 22:00)"]');
        returnDateSlots.evening.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            eveningGroup.appendChild(option);
        });
    }
}

// Calculate daily price based on day of week and holidays
function calculateDailyPrice(basePrice, date) {
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dateString = date.toISOString().split('T')[0];
    
    let multiplier = 1; // Base price for weekdays (Mon-Thu)
    
    if (holidays.includes(dateString)) {
        multiplier = 1.0; // +50% for holidays
    } else if (dayOfWeek === 5) { // Friday
        multiplier = 1.0; // +20%
    } else if (dayOfWeek === 6) { // Saturday
        multiplier = 1.0; // +40%
    } else if (dayOfWeek === 0) { // Sunday
        multiplier = 1.0; // +30%
    }
    
    return Math.round(basePrice * multiplier);
}

// Check if time is morning (7:00-11:00)
function isMorningTime(time) {
    if (!time) return false;
    const hour = parseInt(time.split(':')[0]);
    return hour >= 7 && hour <= 11;
}

// Check if time is evening (18:00-22:00)
function isEveningTime(time) {
    if (!time) return false;
    const hour = parseInt(time.split(':')[0]);
    return hour >= 18 && hour <= 22;
}

// Calculate discount for a specific day of rental
function calculateDayDiscount(dayNumber) {
    if (dayNumber === 1) return 0; // First day is always full price
    
    // Progressive discount system by day:
    // Day 1: 0% (full price)
    // Day 2: 25%
    // Days 3-5: 30%
    // Days 6-8: 35%
    // Days 9-11: 40%
    // Days 12-14: 45%
    // Days 15-17: 50%
    // Days 18-20: 55%
    // Days 21-23: 60%
    // Days 24-26: 65%
    // Days 27-30: 70%
    
    if (dayNumber === 2) return 25;
    if (dayNumber >= 3 && dayNumber <= 5) return 30;
    if (dayNumber >= 6 && dayNumber <= 8) return 35;
    if (dayNumber >= 9 && dayNumber <= 11) return 40;
    if (dayNumber >= 12 && dayNumber <= 14) return 45;
    if (dayNumber >= 15 && dayNumber <= 17) return 50;
    if (dayNumber >= 18 && dayNumber <= 20) return 55;
    if (dayNumber >= 21 && dayNumber <= 23) return 60;
    if (dayNumber >= 24 && dayNumber <= 26) return 65;
    if (dayNumber >= 27 && dayNumber <= 30) return 70;
    
    return 0;
}

// Navigate gallery image
function navigateGalleryImage(motorcycleId, direction) {
    const motorcycle = motorcycles.find(m => m.id === motorcycleId);
    if (!motorcycle) return;
    
    const currentIndex = galleryImageIndices[motorcycleId];
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) {
        newIndex = motorcycle.images.length - 1;
    } else if (newIndex >= motorcycle.images.length) {
        newIndex = 0;
    }
    
    galleryImageIndices[motorcycleId] = newIndex;
    updateGalleryImage(motorcycleId);
}

// Update gallery image
function updateGalleryImage(motorcycleId) {
    const motorcycle = motorcycles.find(m => m.id === motorcycleId);
    if (!motorcycle) return;
    
    const imageElement = document.getElementById(`gallery-image-${motorcycleId}`);
    const dotsContainer = document.getElementById(`gallery-dots-${motorcycleId}`);
    
    if (imageElement) {
        const currentIndex = galleryImageIndices[motorcycleId];
        imageElement.src = motorcycle.images[currentIndex];
        
        // Update dots
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.gallery-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    }
}

// Set gallery image index directly
function setGalleryImageIndex(motorcycleId, index) {
    galleryImageIndices[motorcycleId] = index;
    updateGalleryImage(motorcycleId);
}

// Navigate modal image
function navigateModalImage(direction) {
    if (!currentModalMotorcycle) return;
    
    let newIndex = modalImageIndex + direction;
    
    if (newIndex < 0) {
        newIndex = currentModalMotorcycle.images.length - 1;
    } else if (newIndex >= currentModalMotorcycle.images.length) {
        newIndex = 0;
    }
    
    modalImageIndex = newIndex;
    updateModalImage();
}

// Update modal image
function updateModalImage() {
    if (!currentModalMotorcycle) return;
    
    const imageElement = document.getElementById('modal-main-image');
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    
    if (imageElement) {
        imageElement.src = currentModalMotorcycle.images[modalImageIndex];
        
        // Update thumbnails
        if (thumbnailsContainer) {
            const thumbnails = thumbnailsContainer.querySelectorAll('.modal-thumbnail');
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === modalImageIndex);
            });
        }
    }
}

// Set modal image index
function setModalImageIndex(index) {
    modalImageIndex = index;
    updateModalImage();
}

// Render motorcycles in gallery
function renderMotorcycles() {
    const motorcycleGrid = document.getElementById('motorcycleGrid');
    if (!motorcycleGrid) return;
    
    motorcycleGrid.innerHTML = motorcycles.map(motorcycle => {
        const currentIndex = galleryImageIndices[motorcycle.id] || 0;
        const currentImage = motorcycle.images[currentIndex];
        
        return `
        <div class="motorcycle-card">
            <div class="motorcycle-card__image-container">
                <img src="${currentImage}" 
                     alt="${motorcycle.name}" 
                     class="motorcycle-card__image"
                     id="gallery-image-${motorcycle.id}"
                     onclick="openMotorcycleDetails(${motorcycle.id})"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjEyNSIgeT0iODUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIzMCIgcng9IjUiIGZpbGw9IiNkZGRkZGQiLz4KPHN2Zz4K'">
                
                ${motorcycle.images.length > 1 ? `
                    <button class="gallery-nav gallery-nav--prev" onclick="event.stopPropagation(); navigateGalleryImage(${motorcycle.id}, -1)">
                        <span>&larr;</span>
                    </button>
                    <button class="gallery-nav gallery-nav--next" onclick="event.stopPropagation(); navigateGalleryImage(${motorcycle.id}, 1)">
                        <span>&rarr;</span>
                    </button>
                    
                    <div class="gallery-dots" id="gallery-dots-${motorcycle.id}">
                        ${motorcycle.images.map((_, index) => `
                            <button class="gallery-dot ${index === currentIndex ? 'active' : ''}" 
                                    onclick="event.stopPropagation(); setGalleryImageIndex(${motorcycle.id}, ${index})"></button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="motorcycle-card__content">
                <div class="motorcycle-card__header">
                    <h3 class="motorcycle-card__name" onclick="openMotorcycleDetails(${motorcycle.id})">${motorcycle.name}</h3>
                    <span class="motorcycle-card__category">${motorcycle.category}</span>
                </div>
                <div class="motorcycle-card__specs">
                    <span class="motorcycle-card__spec">Silnik: ${motorcycle.engine}</span>
                    <span class="motorcycle-card__spec">Moc: ${motorcycle.power}</span>
                </div>
                <p class="motorcycle-card__description">${motorcycle.description}</p>
                <div class="motorcycle-card__features">
                    ${motorcycle.features.map(feature => `<span class="motorcycle-card__feature">${feature}</span>`).join('')}
                </div>
                <div class="motorcycle-card__footer">
                    <span class="motorcycle-card__price">${motorcycle.price}</span>
                    <button class="btn--reserve" onclick="openReservationModal(${motorcycle.id})">Zarezerwuj</button>
                </div>
            </div>
        </div>
    `}).join('');
}

// Open motorcycle details modal
function openMotorcycleDetails(motorcycleId) {
    try {
        const motorcycle = motorcycles.find(m => m.id === motorcycleId);
        if (!motorcycle) {
            console.error('Motorcycle not found:', motorcycleId);
            return;
        }
        
        currentModalMotorcycle = motorcycle;
        modalImageIndex = 0;
        
        const motorcycleDetailsModal = document.getElementById('motorcycleDetailsModal');
        const motorcycleDetailsContent = document.getElementById('motorcycleDetailsContent');
        
        if (!motorcycleDetailsModal || !motorcycleDetailsContent) {
            console.error('Modal elements not found');
            return;
        }
        
        motorcycleDetailsContent.innerHTML = `
            <div class="motorcycle-details">
                <div class="motorcycle-details__gallery">
                    <div class="modal-image-container">
                        <img src="${motorcycle.images[0]}" 
                             alt="${motorcycle.name}" 
                             class="motorcycle-details__image"
                             id="modal-main-image"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjE3NSIgeT0iMTM1IiB3aWR0aD0iNTAiIGhlaWdodD0iMzAiIHJ4PSI1IiBmaWxsPSIjZGRkZGRkIi8+CjwvU3ZnPgo='">
                        
                        ${motorcycle.images.length > 1 ? `
                            <button class="modal-nav modal-nav--prev" onclick="navigateModalImage(-1)">
                                <span>&larr;</span>
                            </button>
                            <button class="modal-nav modal-nav--next" onclick="navigateModalImage(1)">
                                <span>&rarr;</span>
                            </button>
                        ` : ''}
                    </div>
                    
                    ${motorcycle.images.length > 1 ? `
                        <div class="modal-thumbnails" id="modal-thumbnails">
                            ${motorcycle.images.map((image, index) => `
                                <img src="${image}" 
                                     alt="${motorcycle.name} - widok ${index + 1}" 
                                     class="modal-thumbnail ${index === 0 ? 'active' : ''}" 
                                     onclick="setModalImageIndex(${index})"
                                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZjVmNWY1Ii8+CjxyZWN0IHg9IjI1IiB5PSIyMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iI2RkZGRkZCIvPgo8L3N2Zz4K'">
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                
                <div class="motorcycle-details__info">
                    <h3>${motorcycle.name}</h3>
                    <p class="motorcycle-details__description">${motorcycle.extendedDescription}</p>
                    
                    <div class="motorcycle-details__specs">
                        ${Object.entries(motorcycle.specifications).map(([key, value]) => `
                            <div class="motorcycle-details__spec-item">
                                <div class="motorcycle-details__spec-label">${key}</div>
                                <div class="motorcycle-details__spec-value">${value}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="motorcycle-details__features">
                        ${motorcycle.features.map(feature => `<span class="motorcycle-details__feature">${feature}</span>`).join('')}
                    </div>
                    
                    <div class="motorcycle-details__conditions">
                        <h4>Warunki wypożyczenia:</h4>
                        <ul>
                            ${motorcycle.conditions.map(condition => `<li>${condition}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        const detailsModalTitle = document.getElementById('detailsModalTitle');
        if (detailsModalTitle) {
            detailsModalTitle.textContent = motorcycle.name;
        }
        
        const reserveFromDetails = document.getElementById('reserveFromDetails');
        if (reserveFromDetails) {
            reserveFromDetails.onclick = () => {
                closeMotorcycleDetails();
                openReservationModal(motorcycleId);
            };
        }
        
        motorcycleDetailsModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        console.log('Modal opened successfully for:', motorcycle.name);
        
    } catch (error) {
        console.error('Error opening motorcycle details:', error);
    }
}

// Close motorcycle details modal
function closeMotorcycleDetails() {
    const motorcycleDetailsModal = document.getElementById('motorcycleDetailsModal');
    if (motorcycleDetailsModal) {
        motorcycleDetailsModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    currentModalMotorcycle = null;
}

// Open reservation modal
function openReservationModal(motorcycleId) {
    currentMotorcycle = motorcycles.find(m => m.id === motorcycleId);
    if (!currentMotorcycle) return;
    
    // Reset calendar state
    selectedStartDate = null;
    selectedEndDate = null;
    
    // Update selected motorcycle info
    const selectedMotorcycleDiv = document.getElementById('selectedMotorcycle');
    if (selectedMotorcycleDiv) {
        selectedMotorcycleDiv.innerHTML = `
            <div class="selected-motorcycle__name">${currentMotorcycle.name}</div>
            <div class="selected-motorcycle__details">
                ${currentMotorcycle.category} • ${currentMotorcycle.engine} • ${currentMotorcycle.power} • ${currentMotorcycle.price}
            </div>
        `;
    }
    
    // Render calendar for current motorcycle
    renderCalendar();
    updateSelectedDatesDisplay();
    
    // Show modal
    const reservationModal = document.getElementById('reservationModal');
    if (reservationModal) {
        reservationModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Close reservation modal
function closeReservationModal() {
    const reservationModal = document.getElementById('reservationModal');
    if (reservationModal) {
        reservationModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.reset();
    }
    
    currentMotorcycle = null;
    selectedStartDate = null;
    selectedEndDate = null;
}

// Close success modal
function closeSuccessModal() {
    console.log('closeSuccessModal function called');
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.add('hidden');
        document.body.style.overflow = '';
        console.log('Success modal closed');
    } else {
        console.log('Success modal element not found');
    }
}

// Render calendar
function renderCalendar() {
    if (!currentMotorcycle) return;
    
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    if (!calendarGrid || !currentMonthElement) return;
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;
    
    // Clear calendar
    calendarGrid.innerHTML = '';
    
    // Add day headers
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = (firstDay.getDay() + 6) % 7; // Convert to Monday = 0
    const daysInMonth = lastDay.getDate();
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day disabled';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of month
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const dailyPrice = calculateDailyPrice(currentMotorcycle.basePrice, date);
        
        // Check if day is in the past
        if (date < today) {
            dayElement.classList.add('disabled');
        } else {
            dayElement.addEventListener('click', () => selectDate(date));
        }
        
        // Check if day is selected or in range
        const dateString = date.toISOString().split('T')[0];
        const startString = selectedStartDate ? selectedStartDate.toISOString().split('T')[0] : null;
        const endString = selectedEndDate ? selectedEndDate.toISOString().split('T')[0] : null;
        
        if (startString && dateString === startString) {
            dayElement.classList.add('selected');
        } else if (endString && dateString === endString) {
            dayElement.classList.add('selected');
        } else if (startString && endString && date > selectedStartDate && date < selectedEndDate) {
            dayElement.classList.add('in-range');
        }
        
        dayElement.innerHTML = `
            <div class="calendar-day-number">${day}</div>
            <div class="calendar-day-price">${dailyPrice} zł</div>
        `;
        
        calendarGrid.appendChild(dayElement);
    }
}

// Select date in calendar
function selectDate(date) {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        // Select start date
        selectedStartDate = date;
        selectedEndDate = null;
        selectedPickupTime = null;
        selectedReturnTime = null;

    } else if (date > selectedStartDate) {
        // Select end date
        selectedEndDate = date;

    } else {
        // Select new start date
        selectedStartDate = date;
        selectedEndDate = null;
        selectedPickupTime = null;
        selectedReturnTime = null;

    }
    
    renderCalendar();
    updateSelectedDatesDisplay();
    populateTimeDropdowns();
    calculateTotalPrice();
}

    // Update selected dates display
    function updateSelectedDatesDisplay() {
        const selectedDatesElement = document.getElementById('selectedDates');
        const timeSelectionElement = document.getElementById('timeSelection');
        
        if (!selectedDatesElement) return;
        
        if (!selectedStartDate) {
            selectedDatesElement.innerHTML = '<p>Wybierz datę rozpoczęcia i zakończenia wypożyczenia</p>';
            selectedDatesElement.classList.remove('has-dates');
            if (timeSelectionElement) timeSelectionElement.style.display = 'none';
            return;
        }
        
        const startDateStr = selectedStartDate.toLocaleDateString('pl-PL');
        
        if (selectedEndDate) {
            const endDateStr = selectedEndDate.toLocaleDateString('pl-PL');
            const days = Math.ceil((selectedEndDate - selectedStartDate) / (1000 * 60 * 60 * 24));
            
            selectedDatesElement.innerHTML = `<p><strong>Okres wypożyczenia:</strong> ${startDateStr} - ${endDateStr} (${days} ${days === 1 ? 'dzień' : days < 5 ? 'dni' : 'dni'})</p>`;
            selectedDatesElement.classList.add('has-dates');
            
            // Show time selection
            if (timeSelectionElement) timeSelectionElement.style.display = 'block';
        } else {
            selectedDatesElement.innerHTML = `<p><strong>Data rozpoczęcia:</strong> ${startDateStr}<br>Wybierz datę zakończenia</p>`;
            selectedDatesElement.classList.add('has-dates');
            
            // Hide time selection
            if (timeSelectionElement) timeSelectionElement.style.display = 'none';
        }
    }

// Calculate total price
function calculateTotalPrice() {
    const priceCalculationElement = document.getElementById('priceCalculation');
    if (!priceCalculationElement) return;
    
    if (!selectedStartDate || !selectedEndDate || !currentMotorcycle) {
        priceCalculationElement.innerHTML = '';
        return;
    }
    
    // Only show pricing if both dates AND times are selected
    if (!selectedPickupTime || !selectedReturnTime) {
        priceCalculationElement.innerHTML = `
            <h4>Podsumowanie kosztów</h4>
            <div class="price-breakdown">
                <p>Wybierz godziny odbioru i zwrotu, aby zobaczyć koszty</p>
            </div>
        `;
        return;
    }
    
    let totalPrice = 0;
    let breakdown = [];
    
    const currentDateCalc = new Date(selectedStartDate);
    while (currentDateCalc <= selectedEndDate) {
        const dailyPrice = calculateDailyPrice(currentMotorcycle.basePrice, currentDateCalc);
        totalPrice += dailyPrice;
        breakdown.push({
            date: new Date(currentDateCalc),
            price: dailyPrice
        });
        currentDateCalc.setDate(currentDateCalc.getDate() + 1);
    }
    
    const days = breakdown.length;
    

    
    // Calculate progressive discounts for each day
    let totalDiscountAmount = 0;
    let discountedBreakdown = [];
    let actualRentalDays = 0;
    
            // Calculate actual rental duration based on time selection
        if (selectedPickupTime && selectedReturnTime) {
        const pickupIsMorning = isMorningTime(selectedPickupTime);
        const returnIsMorning = isMorningTime(selectedReturnTime);
        const pickupIsEvening = isEveningTime(selectedPickupTime);
        const returnIsEvening = isEveningTime(selectedReturnTime);
        
        // Calculate actual rental days
        if (selectedStartDate.getTime() === selectedEndDate.getTime()) {
            // Same day rental
            if (pickupIsMorning && returnIsEvening) {
                actualRentalDays = 1.0; // Full day (morning to evening)
            } else {
                actualRentalDays = 0.5; // Half day for any other combination
            }
        } else {
            // Multi-day rental - simple logic based on your requirements
            const startDateTime = new Date(selectedStartDate);
            const endDateTime = new Date(selectedEndDate);
            
            // Set the actual pickup and return times
            const [pickupHour, pickupMinute] = selectedPickupTime.split(':').map(Number);
            const [returnHour, returnMinute] = selectedReturnTime.split(':').map(Number);
            
            startDateTime.setHours(pickupHour, pickupMinute, 0, 0);
            endDateTime.setHours(returnHour, returnMinute, 0, 0);
            
            // Calculate actual rental duration in hours
            const timeDifferenceMs = endDateTime.getTime() - startDateTime.getTime();
            const rentalHours = timeDifferenceMs / (1000 * 60 * 60);
            
            // Your exact logic:
            // 0-24 hours = 1.0 day
            // 25-48 hours = 2.0 days
            // 49-72 hours = 3.0 days
            // And so on...
            if (rentalHours <= 24) {
                actualRentalDays = 1.0;
            } else if (rentalHours <= 48) {
                actualRentalDays = 2.0;
            } else if (rentalHours <= 72) {
                actualRentalDays = 3.0;
            } else if (rentalHours <= 96) {
                actualRentalDays = 4.0;
            } else if (rentalHours <= 120) {
                actualRentalDays = 5.0;
            } else {
                // For longer rentals, calculate days
                actualRentalDays = Math.ceil(rentalHours / 24);
            }
        }
    } else {
        // No time selection, use calendar days
        actualRentalDays = breakdown.length;
    }
    
    // Calculate the total price based on actual rental duration
    let finalPrice;
    
    if (selectedPickupTime && selectedReturnTime) {
        // Calculate price based on actual rental duration
        let totalPriceForDuration = 0;
        
        if (selectedStartDate.getTime() === selectedEndDate.getTime()) {
            // Same day rental
            if (isMorningTime(selectedPickupTime) && isEveningTime(selectedReturnTime)) {
                // Full day: morning to evening
                totalPriceForDuration = calculateDailyPrice(currentMotorcycle.basePrice, selectedStartDate);
            } else {
                // Half day
                totalPriceForDuration = Math.round(calculateDailyPrice(currentMotorcycle.basePrice, selectedStartDate) * 0.5);
            }
        } else {
            // Multi-day rental - calculate price based on actual rental duration
            // We need to calculate the price for the actual rental duration, not calendar days
            
            // Calculate the base price per day
            const basePricePerDay = currentMotorcycle.basePrice;
            
            // Calculate price for each day of the actual rental duration
            for (let day = 1; day <= actualRentalDays; day++) {
                // Use the start date for the first day, then add days
                const currentDate = new Date(selectedStartDate);
                currentDate.setDate(selectedStartDate.getDate() + day - 1);
                
                const dailyPrice = calculateDailyPrice(basePricePerDay, currentDate);
                const dayDiscount = calculateDayDiscount(day);
                const dayPrice = dailyPrice - Math.round(dailyPrice * (dayDiscount / 100));
                
                totalPriceForDuration += dayPrice;
                
                // Add to breakdown (only for the actual rental days)
                discountedBreakdown.push({
                    date: currentDate,
                    price: dailyPrice,
                    dayNumber: day,
                    discount: dayDiscount,
                    discountAmount: dailyPrice - dayPrice,
                    finalPrice: dayPrice
                });
            }
        }
        
        finalPrice = totalPriceForDuration;
        
        // Calculate the price without discounts based on actual rental duration
        let priceWithoutDiscounts = 0;
        for (let day = 1; day <= actualRentalDays; day++) {
            const currentDate = new Date(selectedStartDate);
            currentDate.setDate(selectedStartDate.getDate() + day - 1);
            priceWithoutDiscounts += calculateDailyPrice(currentMotorcycle.basePrice, currentDate);
        }
        
        totalDiscountAmount = priceWithoutDiscounts - finalPrice;
        totalPrice = priceWithoutDiscounts; // Update totalPrice to reflect actual rental duration
    } else {
        // No time selection, use original calculation
        breakdown.forEach((dayData, index) => {
            const dayNumber = index + 1;
            const dayDiscount = calculateDayDiscount(dayNumber);
            const dayFinalPrice = dayData.price - Math.round(dayData.price * (dayDiscount / 100));
            
            const dayDiscountAmount = dayData.price - dayFinalPrice;
            totalDiscountAmount += dayDiscountAmount;
            
            discountedBreakdown.push({
                ...dayData,
                dayNumber: dayNumber,
                discount: dayDiscount,
                discountAmount: dayDiscountAmount,
                finalPrice: dayFinalPrice
            });
        });
        
        finalPrice = totalPrice - totalDiscountAmount;
    }
    
    priceCalculationElement.innerHTML = `
        <h4>Podsumowanie kosztów</h4>
        <div class="price-breakdown">
            ${actualRentalDays} ${actualRentalDays === 1 ? 'dzień' : actualRentalDays < 5 ? 'dni' : 'dni'} wypożyczenia
        </div>
        ${totalDiscountAmount > 0 ? `
            <div class="discount-info">
                <span class="discount-label">Rabaty progresywne:</span>
                <span class="discount-amount">Łącznie: -${totalDiscountAmount} zł</span>
            </div>
            <div class="daily-breakdown">
                ${discountedBreakdown.map(day => `
                    <div class="day-breakdown">
                        <span class="day-number">Dzień ${day.dayNumber}:</span>
                        <span class="day-price">${day.price} zł</span>
                        ${day.discount > 0 ? `<span class="day-discount">-${day.discount}% (${day.finalPrice} zł)</span>` : ''}

                    </div>
                `).join('')}
            </div>
        ` : ''}
        
        ${selectedPickupTime && selectedReturnTime ? `
            <div class="time-info">
                <p><strong>Godziny:</strong> Odbior: ${selectedPickupTime} | Zwrot: ${selectedReturnTime}</p>
                <p><strong>Czas wypożyczenia:</strong> ${actualRentalDays} ${actualRentalDays === 1 ? 'dzień' : actualRentalDays < 5 ? 'dni' : 'dni'}</p>
            </div>
        ` : ''}
        <div class="total-price">Łącznie: ${finalPrice} zł</div>
        ${totalDiscountAmount > 0 ? `<div class="original-price">Cena bez rabatów: ${totalPrice} zł</div>` : ''}
    `;
}

// Navigate calendar months
function navigateMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

// Validate form
function validateForm(formData) {
    const errors = [];
    
    // Validate dates
    if (!selectedStartDate || !selectedEndDate) {
        errors.push('Wybierz daty wypożyczenia w kalendarzu.');
    } else if (selectedEndDate <= selectedStartDate) {
        errors.push('Data zakończenia musi być późniejsza niż data rozpoczęcia.');
    }
    
    // Validate time selection (now obligatory)
    if (!selectedPickupTime || !selectedReturnTime) {
        errors.push('Wybór godzin odbioru i zwrotu jest obowiązkowy.');
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errors.push('Podaj prawidłowy adres email.');
    }
    
    // Validate phone
    const phoneRegex = /^[+]?[\d\s\-\(\)]{9,}$/;
    if (!phoneRegex.test(formData.phone)) {
        errors.push('Podaj prawidłowy numer telefonu.');
    }
    
    return errors;
}

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;
    
    const formData = new FormData(reservationForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    const errors = validateForm(data);
    
    if (errors.length > 0) {
        alert('Błędy w formularzu:\n' + errors.join('\n'));
        return;
    }
    
    // Calculate rental details based on time selection
    let days, totalPrice, totalDiscountAmount, dailyBreakdown, finalPrice;
    
    if (selectedPickupTime && selectedReturnTime) {
        // Use the same calculation logic as the price display
        const startDateTime = new Date(selectedStartDate);
        const endDateTime = new Date(selectedEndDate);
        
        // Set the actual pickup and return times
        const [pickupHour, pickupMinute] = selectedPickupTime.split(':').map(Number);
        const [returnHour, returnMinute] = selectedReturnTime.split(':').map(Number);
        
        startDateTime.setHours(pickupHour, pickupMinute, 0, 0);
        endDateTime.setHours(returnHour, returnMinute, 0, 0);
        
        // Calculate actual rental duration in hours
        const timeDifferenceMs = endDateTime.getTime() - startDateTime.getTime();
        const rentalHours = timeDifferenceMs / (1000 * 60 * 60);
        
        // Calculate actual rental days
        if (rentalHours <= 24) {
            days = 1.0;
        } else if (rentalHours <= 48) {
            days = 2.0;
        } else if (rentalHours <= 72) {
            days = 3.0;
        } else if (rentalHours <= 96) {
            days = 4.0;
        } else if (rentalHours <= 120) {
            days = 5.0;
        } else {
            days = Math.ceil(rentalHours / 24);
        }
        
        // Calculate price without discounts based on actual rental duration
        totalPrice = 0;
        dailyBreakdown = [];
        
        for (let day = 1; day <= days; day++) {
            const currentDate = new Date(selectedStartDate);
            currentDate.setDate(selectedStartDate.getDate() + day - 1);
            const dailyPrice = calculateDailyPrice(currentMotorcycle.basePrice, currentDate);
            totalPrice += dailyPrice;
            
            const dayDiscount = calculateDayDiscount(day);
            const dayDiscountAmount = Math.round(dailyPrice * (dayDiscount / 100));
            const dayFinalPrice = dailyPrice - dayDiscountAmount;
            
            dailyBreakdown.push({
                day: day,
                price: dailyPrice,
                discount: dayDiscount,
                finalPrice: dayFinalPrice
            });
        }
        
        totalDiscountAmount = dailyBreakdown.reduce((sum, day) => sum + (day.price - day.finalPrice), 0);
        finalPrice = totalPrice - totalDiscountAmount;
    } else {
        // Fallback to calendar days if no time selection (shouldn't happen now)
        days = Math.ceil((selectedEndDate - selectedStartDate) / (1000 * 60 * 60 * 24));
        
        totalPrice = 0;
        const currentDateCalc = new Date(selectedStartDate);
        while (currentDateCalc < selectedEndDate) {
            totalPrice += calculateDailyPrice(currentMotorcycle.basePrice, currentDateCalc);
            currentDateCalc.setDate(currentDateCalc.getDate() + 1);
        }
        
        totalDiscountAmount = 0;
        dailyBreakdown = [];
        
        const currentDateCalc2 = new Date(selectedStartDate);
        let dayCounter = 1;
        while (currentDateCalc2 < selectedEndDate) {
            const dailyPrice = calculateDailyPrice(currentMotorcycle.basePrice, currentDateCalc2);
            const dayDiscount = calculateDayDiscount(dayCounter);
            const dayDiscountAmount = Math.round(dailyPrice * (dayDiscount / 100));
            const dayFinalPrice = dailyPrice - dayDiscountAmount;
            
            totalDiscountAmount += dayDiscountAmount;
            dailyBreakdown.push({
                day: dayCounter,
                price: dailyPrice,
                discount: dayDiscount,
                finalPrice: dayFinalPrice
            });
            
            currentDateCalc2.setDate(currentDateCalc2.getDate() + 1);
            dayCounter++;
        }
        
        finalPrice = totalPrice - totalDiscountAmount;
    }
    
    // Prepare data for backend API
    const formattedStartDate = formatDateForAPI(selectedStartDate);
    const formattedEndDate = formatDateForAPI(selectedEndDate);
    
    if (!formattedStartDate || !formattedEndDate) {
        console.error('Failed to format dates:', { selectedStartDate, selectedEndDate });
        alert('Błąd w formatowaniu dat. Spróbuj ponownie.');
        return;
    }
    
    const reservationData = {
        motorcycleName: currentMotorcycle.name,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        days: days,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        totalPrice: totalPrice,
        totalDiscount: totalDiscountAmount,
        finalPrice: finalPrice,
        dailyBreakdown: dailyBreakdown,
        pickupTime: selectedPickupTime,
        returnTime: selectedReturnTime
    };

    // Send reservation to backend API
    try {
        const apiUrl = window.appConfig ? window.appConfig.getApiUrl() : 'http://localhost:3000/api/reservations';
        
        // Debug logging for date formats
        console.log('Sending reservation data:', {
            startDate: reservationData.startDate,
            endDate: reservationData.endDate,
            startDateType: typeof reservationData.startDate,
            endDateType: typeof reservationData.endDate,
            originalStartDate: selectedStartDate,
            originalEndDate: selectedEndDate
        });
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData)
        });

        const result = await response.json();

        if (result.success) {
            // Show success modal
            const reservationSummary = document.getElementById('reservationSummary');
            if (reservationSummary) {
                reservationSummary.innerHTML = `
                    <h4>Szczegóły rezerwacji:</h4>
                    <p><strong>Motocykl:</strong> ${currentMotorcycle.name}</p>
                    <p><strong>Okres:</strong> ${selectedStartDate.toLocaleDateString('pl-PL')} - ${selectedEndDate.toLocaleDateString('pl-PL')} (${days} ${days === 1 ? 'dzień' : days < 5 ? 'dni' : 'dni'})</p>
                    ${selectedPickupTime && selectedReturnTime ? `<p><strong>Godziny:</strong> Odbior: ${selectedPickupTime} | Zwrot: ${selectedReturnTime}</p>` : ''}
                    <p><strong>Imię i nazwisko:</strong> ${data.firstName} ${data.lastName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Telefon:</strong> ${data.phone}</p>
                    ${totalDiscountAmount > 0 ? `<p><strong>Łączny rabat:</strong> -${totalDiscountAmount} zł</p>` : ''}
                    <p><strong>Łączny koszt:</strong> ${finalPrice} zł</p>
                    ${totalDiscountAmount > 0 ? `<p><em>Cena bez rabatów: ${totalPrice} zł</em></p>` : ''}
                    <p><strong>Status:</strong> ✅ Rezerwacja została wysłana pomyślnie!</p>
                `;
            }
        } else {
            throw new Error(result.message || 'Błąd podczas wysyłania rezerwacji');
        }
    } catch (error) {
        console.error('Error sending reservation:', error);
        
        // More user-friendly error handling
        let errorMessage = 'Wystąpił błąd podczas wysyłania rezerwacji.';
        
        if (error.message.includes('fetch')) {
            errorMessage = 'Nie można połączyć się z serwerem. Sprawdź połączenie internetowe i spróbuj ponownie.';
        } else if (error.message.includes('400')) {
            errorMessage = 'Błąd w danych rezerwacji. Sprawdź poprawność wprowadzonych informacji.';
        } else if (error.message.includes('500')) {
            errorMessage = 'Błąd serwera. Spróbuj ponownie za kilka minut.';
        } else if (error.message) {
            errorMessage = error.message;
        }
        
        // Show error in a more user-friendly way
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div style="background: #fee; border: 1px solid #fcc; padding: 15px; margin: 10px 0; border-radius: 5px; color: #c33;">
                <strong>Błąd:</strong> ${errorMessage}
                <br><small>Jeśli problem się powtarza, skontaktuj się z nami telefonicznie.</small>
            </div>
        `;
        
        // Insert error message before the form
        const form = document.getElementById('reservationForm');
        if (form) {
            form.insertBefore(errorDiv, form.firstChild);
            
            // Remove error message after 10 seconds
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.parentNode.removeChild(errorDiv);
                }
            }, 10000);
        }
        
        return;
    }

    // Show success modal with reservation summary
    const reservationSummary = document.getElementById('reservationSummary');
    if (reservationSummary) {
        reservationSummary.innerHTML = `
            <h4>Szczegóły rezerwacji:</h4>
            <p><strong>Motocykl:</strong> ${currentMotorcycle.name}</p>
            <p><strong>Okres:</strong> ${selectedStartDate.toLocaleDateString('pl-PL')} - ${selectedEndDate.toLocaleDateString('pl-PL')} (${days} ${days === 1 ? 'dzień' : days < 5 ? 'dni' : 'dni'})</p>
            ${selectedPickupTime && selectedReturnTime ? `<p><strong>Godziny:</strong> Odbior: ${selectedPickupTime} | Zwrot: ${selectedReturnTime}</p>` : ''}
            <p><strong>Imię i nazwisko:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefon:</strong> ${data.phone}</p>
            ${totalDiscountAmount > 0 ? `<p><strong>Łączny rabat:</strong> -${totalDiscountAmount} zł</p>` : ''}
            <p><strong>Łączny koszt:</strong> ${finalPrice} zł</p>
            ${totalDiscountAmount > 0 ? `<p><em>Cena bez rabatów: ${totalPrice} zł</em></p>` : ''}
        `;
    }
    
    // Close reservation modal and show success modal
    closeReservationModal();
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Add event listeners directly to the success modal
        setTimeout(() => {
            const closeSuccessModalBtn = successModal.querySelector('#closeSuccessModal');
            const closeSuccess = successModal.querySelector('#closeSuccess');
            const successModalOverlay = successModal.querySelector('#successModalOverlay');
            
            if (closeSuccessModalBtn) {
                closeSuccessModalBtn.onclick = closeSuccessModal;
                console.log('X button listener added directly');
            }
            
            if (closeSuccess) {
                closeSuccess.onclick = closeSuccessModal;
                console.log('Zamknij button listener added directly');
            }
            
            if (successModalOverlay) {
                successModalOverlay.onclick = closeSuccessModal;
                console.log('Overlay listener added directly');
            }
        }, 100);
    }
}

// Setup success modal event listeners
function setupSuccessModalListeners() {
    const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
    const closeSuccess = document.getElementById('closeSuccess');
    const successModalOverlay = document.getElementById('successModalOverlay');
    
    if (closeSuccessModalBtn) {
        closeSuccessModalBtn.removeEventListener('click', closeSuccessModal);
        closeSuccessModalBtn.addEventListener('click', closeSuccessModal);
        console.log('Success modal X button listener added');
    }
    
    if (closeSuccess) {
        closeSuccess.removeEventListener('click', closeSuccessModal);
        closeSuccess.addEventListener('click', closeSuccessModal);
        console.log('Success modal Zamknij button listener added');
    }
    
    if (successModalOverlay) {
        successModalOverlay.removeEventListener('click', closeSuccessModal);
        successModalOverlay.addEventListener('click', closeSuccessModal);
        console.log('Success modal overlay listener added');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Modal close buttons
    const closeDetailsModal = document.getElementById('closeDetailsModal');
    const closeModal = document.getElementById('closeModal');
    const cancelReservation = document.getElementById('cancelReservation');
    const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
    const closeSuccess = document.getElementById('closeSuccess');
    
    if (closeDetailsModal) closeDetailsModal.addEventListener('click', closeMotorcycleDetails);
    if (closeModal) closeModal.addEventListener('click', closeReservationModal);
    if (cancelReservation) cancelReservation.addEventListener('click', closeReservationModal);
    if (closeSuccessModalBtn) closeSuccessModalBtn.addEventListener('click', closeSuccessModal);
    if (closeSuccess) closeSuccess.addEventListener('click', closeSuccessModal);
    
    // Modal overlay clicks
    const detailsModalOverlay = document.getElementById('detailsModalOverlay');
    const modalOverlay = document.getElementById('modalOverlay');
    const successModalOverlay = document.getElementById('successModalOverlay');
    
    if (detailsModalOverlay) detailsModalOverlay.addEventListener('click', closeMotorcycleDetails);
    if (modalOverlay) modalOverlay.addEventListener('click', closeReservationModal);
    if (successModalOverlay) successModalOverlay.addEventListener('click', closeSuccessModal);
    
    // Calendar navigation
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    
    if (prevMonth) prevMonth.addEventListener('click', () => navigateMonth(-1));
    if (nextMonth) nextMonth.addEventListener('click', () => navigateMonth(1));
    
    // Time selection
    const pickupTimeSelect = document.getElementById('pickupTime');
    const returnTimeSelect = document.getElementById('returnTime');
    
    if (pickupTimeSelect) {
        pickupTimeSelect.addEventListener('change', function() {
            selectedPickupTime = this.value;
            calculateTotalPrice();
        });
    }
    
    if (returnTimeSelect) {
        returnTimeSelect.addEventListener('change', function() {
            selectedReturnTime = this.value;
            calculateTotalPrice();
        });
    }
    
    // Form submission
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const motorcycleDetailsModal = document.getElementById('motorcycleDetailsModal');
            const reservationModal = document.getElementById('reservationModal');
            const successModal = document.getElementById('successModal');
            
            if (motorcycleDetailsModal && !motorcycleDetailsModal.classList.contains('hidden')) {
                closeMotorcycleDetails();
            }
            if (reservationModal && !reservationModal.classList.contains('hidden')) {
                closeReservationModal();
            }
            if (successModal && !successModal.classList.contains('hidden')) {
                closeSuccessModal();
            }
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Go to top function
function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Make functions globally available
window.openMotorcycleDetails = openMotorcycleDetails;
window.openReservationModal = openReservationModal;
window.closeSuccessModal = closeSuccessModal;
window.goToTop = goToTop;
window.navigateGalleryImage = navigateGalleryImage;
window.navigateModalImage = navigateModalImage;
window.setModalImageIndex = setModalImageIndex;
window.updateGalleryImage = updateGalleryImage;
window.setGalleryImageIndex = setGalleryImageIndex;
window.galleryImageIndices = galleryImageIndices;