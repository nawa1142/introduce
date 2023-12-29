window.addEventListener('scroll', function() {
    const infos = ['info-1', 'info-2', 'info-3', 'info-4', 'info-5', 'info-6']; // แก้ไข IDs ให้ตรงกับ ID ของ element ที่ต้องการใช้งาน

    infos.forEach(function(id) {
        const element = document.getElementById(id);
        if (!element) return;

        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = "1";
        } else {
            element.style.opacity = "0"; // ให้ element ที่อยู่นอกขอบเขตของ viewport มี opacity เป็น 0
        }
    });
});