<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TuteDude - HTML Learning Demo Page</title>
</head>
<body>

<header>
    <h1>🌮 Welcome to <mark>TuteDude</mark> 🌮</h1>
    <p><em>A project designed by <strong>TuteDude</strong> to learn HTML</em></p>
    <p>Best TuteDude in town since <time datetime="2021">2021</time></p>

    <nav>
        <ul>
            <li><a href="#about">About TD</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#trivia">Taco Trivia</a></li>
            <li><a href="#extras">Extras</a></li>
            <li><a href="#feedback">Feedback Form</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <figure id="top">
        <svg xmlns="http://www.w3.org/2000/svg" width="450" height="300" viewBox="0 0 450 300" role="img" aria-label="TuteDude Course Banner">
            <rect width="450" height="300" fill="#FBEBD8"/>
            <g stroke="#5B21B6" stroke-width="6" fill="none" stroke-linejoin="round" stroke-linecap="round">
                <path d="M60 70 Q100 55 140 70 L140 150 Q100 135 60 150 Z"/>
                <path d="M220 70 Q180 55 140 70 L140 150 Q180 135 220 150 Z"/>
                <line x1="140" y1="70" x2="140" y2="150"/>
            </g>
            <circle cx="60" cy="108" r="6" fill="#5B21B6"/>
            <circle cx="220" cy="108" r="6" fill="#5B21B6"/>
            <text x="240" y="95" font-family="Verdana, sans-serif" font-size="42" font-weight="bold" fill="#5B21B6">TuteDude</text>
            <text x="240" y="150" font-family="Verdana, sans-serif" font-size="46" font-weight="bold" fill="#F97316">COURSE</text>
            <g>
                <rect x="60" y="200" width="90" height="60" rx="4" fill="#374151"/>
                <rect x="70" y="210" width="70" height="40" fill="#93C5FD"/>
                <circle cx="45" cy="220" r="18" fill="#F59E0B"/>
                <rect x="20" y="238" width="60" height="45" rx="6" fill="#16A34A"/>
                <rect x="10" y="255" width="220" height="10" fill="#A16207"/>
                <rect x="180" y="235" width="16" height="30" fill="#DC2626"/>
            </g>
        </svg>
        <figcaption>TuteDude and a Drink</figcaption>
    </figure>
</header>

<main>

    <section id="about">
        <h2>About TD</h2>
        <article>
            <p><abbr title="TuteDude">TD</abbr> was founded in <time datetime="2021">2021</time>. This demo project was created by <strong>TuteDude</strong> for learning all major HTML tags 🌮.</p>
            <p>Level up your career with expert mentorship &amp; internships for FREE.</p>
        </article>
    </section>

    <section id="menu">
        <h2>Our Menu</h2>

        <table border="1">
            <caption>TuteDude Complete Taco Menu</caption>
            <thead>
                <tr>
                    <th rowspan="2">Category</th>
                    <th rowspan="2">Type</th>
                    <th colspan="2">Small Portion</th>
                    <th colspan="2">Large Portion</th>
                </tr>
                <tr>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="3">TuteDude</td>
                    <td>Crunchy (Beef)</td>
                    <td>1</td>
                    <td>$1.50</td>
                    <td>3</td>
                    <td>$3.25</td>
                </tr>
                <tr>
                    <td>Crunchy (Chicken)</td>
                    <td>1</td>
                    <td>$1.75</td>
                    <td>3</td>
                    <td>$3.50</td>
                </tr>
                <tr>
                    <td>
                        Crunchy (Veggie)
                        <table border="1">
                            <caption>Nutrition Info</caption>
                            <tr><th>Nutrient</th><th>Value</th></tr>
                            <tr><td>Calories</td><td>150 kcal</td></tr>
                            <tr><td>Protein</td><td>5 g</td></tr>
                            <tr><td>Fiber</td><td>4 g</td></tr>
                        </table>
                    </td>
                    <td>1</td>
                    <td>$1.25</td>
                    <td>3</td>
                    <td>$3.00</td>
                </tr>

                <tr>
                    <td rowspan="2">Soft TuteDude</td>
                    <td>Soft (Beef)</td>
                    <td>2</td>
                    <td>$3.50</td>
                    <td>4</td>
                    <td>$6.50</td>
                </tr>
                <tr>
                    <td>Soft (Veggie)</td>
                    <td>2</td>
                    <td>$3.00</td>
                    <td>4</td>
                    <td>$5.50</td>
                </tr>

                <tr>
                    <td rowspan="2">Combos</td>
                    <td>2 Crunchy + Drink</td>
                    <td colspan="4">$4.50</td>
                </tr>
                <tr>
                    <td>
                        2 Soft + Drink
                        <table border="1">
                            <caption>Combo Meals Nutrition Facts</caption>
                            <tr><th>Item</th><th>Calories</th><th>Sugar</th></tr>
                            <tr><td>Soft Taco</td><td>200 kcal</td><td>2 g</td></tr>
                            <tr><td>Drink</td><td>120 kcal</td><td>25 g</td></tr>
                            <tr><td>Total</td><td>320 kcal</td><td>27 g</td></tr>
                        </table>
                    </td>
                    <td colspan="4">$5.00</td>
                </tr>

                <tr>
                    <td rowspan="2">Extras</td>
                    <td>Chips &amp; Salsa</td>
                    <td colspan="4">$2.00</td>
                </tr>
                <tr>
                    <td>Guacamole</td>
                    <td colspan="4">$1.50</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6">Average Meal Price Range: $2.00 &ndash; $6.50</td>
                </tr>
            </tfoot>
        </table>

        <p><a href="#top">Back to Top</a></p>
    </section>

    <section id="trivia">
        <h2>Taco Trivia</h2>
        <aside>
            <details>
                <summary>When did TuteDude first appear in the United States?</summary>
                <p>TuteDude style tacos are believed to have first appeared in the United States in the early 1900s, brought over by Mexican immigrants.</p>
            </details>
            <details>
                <summary>What is the most popular taco filling?</summary>
                <p>Beef remains the most popular taco filling across the United States, followed closely by chicken.</p>
            </details>
        </aside>
    </section>

    <section id="extras">
        <h2>Extras</h2>
        <h3>Media Fun</h3>

        <h4>Listen to Taco Music</h4>
        <audio controls>
            <source src="taco-music.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

        <h4>Watch Taco Video</h4>
        <video controls width="350">
            <source src="taco-video.mp4" type="video/mp4">
            Your browser does not support the video element.
        </video>
    </section>

    <section id="feedback">
        <h2>Give Us Your Feedback</h2>
        <form action="#" method="post">
            <fieldset>
                <legend>Your Info</legend>

                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>

                <label for="favtaco">Favorite Taco:</label>
                <select id="favtaco" name="favtaco">
                    <option value="crunchy">Crunchy</option>
                    <option value="soft">Soft</option>
                    <option value="veggie">Veggie</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>Your Message</legend>
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="5" cols="40"></textarea>
            </fieldset>

            <br>
            <input type="submit" value="Submit">
        </form>
    </section>

</main>

<footer id="contact">
    <h2>Contact Us</h2>
    <address>
        TuteDude<br>
        123 Taco Street<br>
        Taco Town, TX 75000<br>
        Email: <a href="mailto:info@tutedude.com">info@tutedude.com</a>
    </address>
    <p>&copy; <time datetime="2026">2026</time> TuteDude. All rights reserved.</p>
</footer>

</body>
</html>
