this.backdrop('beach', { opacity: 0.5 }, { duration: 2000 }); // fades to half opacity over 2 seconds
this.backdrop('office', { duration: 1000 }); // fades to full opacity over 1 second

await this.backdrop('shower'); // fades to full opacity over the default transition duration
this.backdrop('shower', { instance: 1 }); // fades in a second instance of the shower backdrop
this.backdrop('shower', { opacity: 0 }); // fades out the first instance of the shower backdrop
