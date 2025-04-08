function App() {}

    window.onload = function(event) {
        window.app = new App();
    }

    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const track = document.getElementById('track');
        const carruselItems = track.querySelectorAll('.carrusel-item');

        const carruselWidth = carruselItems[0].offsetWidth;
        const trackWidth = track.offsetWidth;
        const visibleWidth = track.parentNode.offsetWidth;

        let leftPosition = track.style.left ? parseFloat(track.style.left) : 0;

        if (btn.dataset.button === "button-prev") {
            this.prevAction(leftPosition, carruselWidth, track);
        } else {
            this.nextAction(leftPosition, trackWidth, visibleWidth, carruselWidth, track);
        }
    }

    App.prototype.prevAction = function(leftPosition, carruselWidth, track) {
        if (leftPosition < 0) {
            track.style.left = `${leftPosition + carruselWidth}px`;
        }
    }

    App.prototype.nextAction = function(leftPosition, trackWidth, visibleWidth, carruselWidth, track) {
        if (Math.abs(leftPosition) < (trackWidth - visibleWidth)) {
            track.style.left = `${leftPosition - carruselWidth}px`;
        }
    }

    
