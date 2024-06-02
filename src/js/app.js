
const empowermentQuotes = [
    {
        index: 1,
        title: "Right to Dream",
        quote: "Every Muslim woman has the right to dream, learn, and achieve just like any other woman.",
        time: 10 // seconds
    },
    {
        index: 2,
        title: "Respecting Choices",
        quote: "Empowering Muslim women means respecting their choices and giving them the freedom to pursue their goals.",
        time: 12 // seconds
    },
    {
        index: 3,
        title: "Fundamental Education",
        quote: "Education is a fundamental right for Muslim women, opening doors to endless opportunities.",
        time: 15 // seconds
    },
    {
        index: 4,
        title: "Love Knows No Boundaries",
        quote: "Love knows no boundaries—Muslim women should be free to marry whom they choose, without constraints.",
        time: 11 // seconds
    },
    {
        index: 5,
        title: "Equality for All",
        quote: "Equality means ensuring Muslim women have the same opportunities and rights as everyone else.",
        time: 14 // seconds
    },
    {
        index: 6,
        title: "Breaking Patriarchal Norms",
        quote: "No woman should be held back by patriarchal norms; every Muslim woman deserves the freedom to chart her own path.",
        time: 13 // seconds
    },
    {
        index: 7,
        title: "Respect and Self-Determination",
        quote: "Respecting Muslim women means honoring their right to education, freedom, and self-determination.",
        time: 12 // seconds
    },
    {
        index: 8,
        title: "Strength and Capability",
        quote: "Muslim women are strong and capable; they deserve the chance to shine in all aspects of life.",
        time: 13 // seconds
    },
    {
        index: 9,
        title: "Empowerment through Choice",
        quote: "Empowerment comes from choice—Muslim women should be free to make their own decisions in love and life.",
        time: 14 // seconds
    },
    {
        index: 10,
        title: "Dignity and Freedom",
        quote: "Every Muslim woman has the right to a life of dignity, respect, and freedom from oppression.",
        time: 15 // seconds
    },

    // =========== more ==========


    {
        index: 11,
        title: "Courage to Soar",
        quote: "Just like birds, Muslim women should have the courage to soar to great heights, unrestricted by societal cages.",
        time: 16 // seconds
    },
    {
        index: 12,
        title: "Breaking Barriers",
        quote: "Breaking barriers isn't just about shattering glass ceilings; it's about dismantling the walls of inequality that confine Muslim women.",
        time: 17 // seconds
    },
    {
        index: 13,
        title: "Strength in Diversity",
        quote: "The strength of Muslim women lies in their diversity; each one a unique voice contributing to the symphony of progress and change.",
        time: 18 // seconds
    },
    {
        index: 14,
        title: "Building Bridges",
        quote: "In a world divided by fear and misunderstanding, Muslim women are the architects of bridges, connecting hearts and minds across cultures and faiths.",
        time: 19 // seconds
    },
    {
        index: 15,
        title: "Empowering Generations",
        quote: "Empowering Muslim women isn't just about the present; it's about investing in future generations, ensuring a legacy of strength, resilience, and progress.",
        time: 20 // seconds
    },
    {
        index: 16,
        title: "Embracing Identity",
        quote: "Embracing one's identity as a Muslim woman isn't a limitation, but a source of strength and pride, enriching the tapestry of humanity with diverse perspectives.",
        time: 21 // seconds
    },
    {
        index: 17,
        title: "Champions of Change",
        quote: "Muslim women are not just victims of circumstance; they are champions of change, fearlessly rewriting the script of history with every step they take.",
        time: 22 // seconds
    },
    {
        index: 18,
        title: "Voice of Reason",
        quote: "In a world filled with chaos and noise, the voice of Muslim women is a beacon of reason, compassion, and hope, guiding humanity towards a brighter future.",
        time: 23 // seconds
    },
    {
        index: 19,
        title: "Agents of Empowerment",
        quote: "Muslim women are not passive recipients of empowerment; they are active agents, shaping their destiny with courage, resilience, and unwavering determination.",
        time: 24 // seconds
    },
    {
        index: 20,
        title: "Seeds of Change",
        quote: "In the fertile soil of empowerment, Muslim women are the seeds of change, blossoming into leaders, innovators, and catalysts for a better world.",
        time: 25 // seconds
    }
];



const muslimLadiesAndKafirMen = [
    {
        index: 0,
        title: "Breaking Chains of Patriarchy",
        quote: "Muslim women are breaking the chains of patriarchy, choosing love over societal constraints, and embracing partnerships that transcend religious boundaries.",
        time: 26 // seconds
    },
    {
        index: 1,
        title: "Love Knows No Religion",
        quote: "Love knows no religion; Muslim women are standing firm against the tide of prejudice and hate, choosing to marry based on love, not fear.",
        time: 27 // seconds
    },
    {
        index: 2,
        title: "Defying Extremism with Love",
        quote: "In the face of extremism and bigotry, Muslim women are defiantly choosing love, smashing the barriers of religious intolerance, and forging connections that bridge divides.",
        time: 28 // seconds
    },
    {
        index: 3,
        title: "Courage to Love Freely",
        quote: "Muslim women are demonstrating courage by loving freely, defying the expectations of a patriarchal society that seeks to control their choices and dictate their lives.",
        time: 29 // seconds
    },
    {
        index: 4,
        title: "Challenging Stereotypes",
        quote: "By marrying outside their faith, Muslim women are challenging stereotypes and dismantling the notion of religious superiority, paving the way for a more inclusive and accepting society.",
        time: 30 // seconds
    },
    {
        index: 5,
        title: "Claiming Their Right to Love",
        quote: "Muslim women are claiming their right to love and happiness, rejecting the oppressive ideologies that seek to confine them to narrow roles and limited choices.",
        time: 31 // seconds
    },
    {
        index: 6,
        title: "Love as a Revolutionary Act",
        quote: "For Muslim women, choosing love over societal expectations is a revolutionary act, challenging the status quo and paving the way for a more compassionate and tolerant world.",
        time: 32 // seconds
    },
    {
        index: 7,
        title: "Unity in Diversity",
        quote: "By marrying outside their community, Muslim women are embracing the diversity of human experience and reaffirming their commitment to love, acceptance, and unity.",
        time: 33 // seconds
    },
    {
        index: 8,
        title: "Love Beyond Borders",
        quote: "Love transcends borders, boundaries, and beliefs; Muslim women are embracing this truth, choosing partners based on the content of their character, not the color of their faith.",
        time: 34 // seconds
    },
    {
        index: 9,
        title: "Embracing Love, Rejecting Hate",
        quote: "In the face of hate and intolerance, Muslim women are embracing love, rejecting the narrow-mindedness of extremist ideologies, and forging connections that celebrate diversity and inclusivity.",
        time: 35 // seconds
    }
];



// function to load quotes

function displayQuotesWithSection(quotesArray, sectionClassName) {
    let currentIndex = 0;
    const quoteSection = document.querySelector(`.${sectionClassName}`);

    function showNextQuote() {
        const quote = quotesArray[currentIndex];
        quoteSection.innerHTML = `<div class="quote-title">${quote.title}</div><div class="quote-text">${quote.quote}</div>`;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % quotesArray.length;
            showNextQuote();
        }, quote.time * 1000);
    }

    showNextQuote();
}

// To display quotes from empowermentQuotes array within a section with class "quote-section":
displayQuotesWithSection(empowermentQuotes, "quote-section");

// To display quotes from muslimLadiesAndKafirMen array within a section with class "quote-section":
// displayQuotesWithSection(muslimLadiesAndKafirMen, "quote-section");
