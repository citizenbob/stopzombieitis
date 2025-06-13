# Stop Zombieitis

An interactive web experience about sleep deprivation awareness, created in partnership with the Better Sleep Council. This scroll-driven narrative presents "Zombieitis" (sleep deprivation) as an epidemic, educating users about the symptoms and importance of proper sleep.

## Overview

Stop Zombieitis is a cinematic web application that uses scroll-based storytelling to guide users through an educational journey about sleep deprivation. The experience features:

- **Interactive Timeline**: Scroll-driven animation system that reveals content progressively
- **Film-like Experience**: Multiple background and foreground layers create depth and movement
- **Educational Content**: Information about sleep deprivation symptoms and solutions
- **User Interaction**: Report forms, symptom diagnosis tools, and social sharing
- **Audio Experience**: Background ambient sound with user controls

## Features

### Scroll-Based Navigation
The entire experience is driven by scroll position, with content appearing at specific scroll milestones:
- Background scenes transition automatically
- Character animations sync with scroll position
- Captions and interactive elements appear contextually

### Interactive Components
- **Symptom Checker**: 9-point diagnostic tool for sleep deprivation
- **Reporting System**: Form to report "Zombieitis" sightings
- **Social Integration**: AddThis sharing buttons with custom messages
- **Audio Controls**: Mute/unmute background audio

### Visual Effects
- Film grain overlay effects
- Random frame shake animations
- Dynamic luminosity changes
- Layered foreground/background system

## Technical Implementation

### Core Technologies
- **HTML5**: Semantic structure with accessibility considerations
- **CSS3**: Advanced positioning, animations, and effects
- **jQuery 1.5.2**: DOM manipulation and event handling
- **SoundManager2**: Flash-based audio playback

### Key Files
- [`index.html`](index.html) - Main application structure
- [`css/style.css`](css/style.css) - All styling and layout
- [`js/scroll.js`](js/scroll.js) - Core scroll-based animation system
- [`js/soundmanager2-nodebug-jsmin.js`](js/soundmanager2-nodebug-jsmin.js) - Audio management

### Architecture

#### Timeline System
The application uses a custom `Timeline` class that manages content visibility based on scroll position:

```javascript
function Timeline(container, frames) {
    // Manages frame transitions based on scroll position
}
```

#### Animation Framework
The `Frame` class handles visual effects:
- Random frame bouncing
- Film grain line movement
- Luminosity fluctuations

## Installation & Setup

1. **Web Server**: Serve files through a web server (required for audio functionality)
2. **Dependencies**: All external dependencies are loaded via CDN
3. **Audio Files**: Ensure `snd/super8.mp3` is available
4. **Images**: Verify all images in the `img/` directory are present

### Local Development
```bash
# Simple Python server
python -m http.server 8000

# Or Node.js server
npx http-server
```

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Legacy Support**: Internet Explorer with graceful degradation
- **Flash Requirement**: SoundManager2 requires Flash for audio in older browsers

## Content Structure

### Narrative Sections
1. **Introduction**: Welcome and epidemic overview
2. **Evidence**: Traffic stop scenario and symptoms
3. **Education**: Detailed symptom breakdown
4. **Solution**: Research and cure information
5. **Action**: User engagement tools

### Interactive Elements
- Navigation UI in top-right corner
- Scroll reminder for user guidance
- Form validation and feedback
- Dynamic result pages based on user input

## Educational Partnership

Created in collaboration with the **Better Sleep Council**, featuring:
- Evidence-based sleep research
- Professional medical guidance
- Links to authoritative sleep resources
- Downloadable sleep improvement guides

## Performance Considerations

- **Image Optimization**: Large number of background images
- **Scroll Performance**: Optimized scroll event handling
- **Memory Management**: Efficient DOM manipulation
- **Progressive Loading**: Content revealed as needed

## Social Features

- Facebook page integration
- Twitter sharing with custom messages
- YouTube channel promotion
- Diagnostic result sharing

---

*This project serves as an educational tool to raise awareness about sleep deprivation and its effects on daily life, presented through an engaging interactive medium.*