document.addEventListener("DOMContentLoaded", function () {
    // جلب جميع أزرار View All
    const viewAllButtons = document.querySelectorAll(".view-all-btn");

    viewAllButtons.forEach(button => {
        button.addEventListener("click", function () {
            // جلب القسم المستهدف المربوط بالزر
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // البحث عن جميع البطاقات المخفية في هذا القسم
                const hiddenCards = targetSection.querySelectorAll(".hidden-card");

                hiddenCards.forEach(card => {
                    card.classList.remove("hidden-card");
                });

                // إخفاء الزر بعد عرض كافة البطاقات
                this.style.display = "none";
            }
        });
    });
});