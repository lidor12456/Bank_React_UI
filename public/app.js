TweenMax.from(".navigation", 1.5, {
  delay: 1.3,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".branding", 1.5, {
  delay: 1,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".navigation .menu-right .menu-link",
  1.5,
  {
    delay: 1.5,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  0.08
);

TweenMax.from(".upcoming-slide", 1.5, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".slide-counter", 1.5, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".content-bottom", 1.5, {
  delay: 2.5,
  opacity: 0,
  ease: Expo.easeInOut,
});
