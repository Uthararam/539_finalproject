// Defining an object here with the details of the movies
var movieData = {
    'shawshank_redemption': {
      title: 'The Shawshank Redemption',
      summary: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: '9.3/10',
      releaseYear: '1994',
      director: 'Frank Darabont',
      cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      imdbLink: 'https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_shawsha'
    },

    'greenmile': {
        title: 'The Green Mile',
        summary: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
        rating: '8.6/10',
        releaseYear: '1999',
        director: 'Frank Darabont',
        cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
        imdbLink:'https://www.imdb.com/title/tt0120689/'
    },

    'avengers': {
        title: 'The Avengers',
        summary: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
        rating: '8.0/10',
        releaseYear: '2012',
        director: 'Joss Whedon',
        cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson', 'Mark Ruffalo', 'Chris Hemsworth', 'Jeremy Renner'],
        imdbLink:'https://www.imdb.com/title/tt4154756/'
        },
    
    'joker':{
        title: 'Joker',
        summary: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        rating: '8.5/10', 
        releaseYear: '2019',
        director: 'Todd Phillips',
        cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
        imdbLink:'https://www.imdb.com/title/tt7286456/'
    },

    'notebook':{
        title: 'The Notebook',
        summary: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
        rating: '7.8/10', 
        releaseYear: '2004',
        director: 'Nick Cassavetes',
        cast: ['Ryan Gosling', 'Rachel McAdams', 'James Garner', 'Gena Rowlands'],
        imdbLink:'https://www.imdb.com/title/tt0332280/'
    },

    'oppenheimer':{
        title: 'Oppenheimer',
        summary: 'A biographical drama that chronicles J. Robert Oppenheimer and his role in the development of the atomic bomb.',
        rating: '8.3/10', 
        releaseYear: '2023', 
        director: 'Christopher Nolan',
        cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
        imdbLink:'https://www.imdb.com/title/tt15398776/'
    },

    'lifeofpie':{
        title: 'Life of Pi',
        summary: 'A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.',
        rating: '7.9/10', 
        releaseYear: '2012',
        director: 'Ang Lee',
        cast: ['Suraj Sharma', 'Irrfan Khan', 'Adil Hussain', 'Tabu'],
        imdbLink:'https://www.imdb.com/title/tt0454876/'
    },

    'shutterisland':{
        title: 'Shutter Island',
        summary: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
        rating: '8.2/10', 
        releaseYear: '2010',
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo', 'Ben Kingsley', 'Michelle Williams'],
        imdbLink:'https://www.imdb.com/title/tt1130884/'
    },

    'lalaland':{
        title: 'Shutter Island',
        summary: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
        rating: '8.2/10', 
        releaseYear: '2010',
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo', 'Ben Kingsley', 'Michelle Williams'],
        imdbLink:'https://www.imdb.com/title/tt3783958/'
    },

    'nocountryforoldmen':{
        title: 'No Country for Old Men',
        summary: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        rating: '8.1/10', 
        releaseYear: '2007',
        director: 'Joel Coen, Ethan Coen',
        cast: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        imdbLink:'https://www.imdb.com/title/tt0477348/'
    },
    
    'abeautifulmind': {
        title: 'A Beautiful Mind',
        summary: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
        rating: '8.2/10', 
        releaseYear: '2001',
        director: 'Ron Howard',
        cast: ['Russell Crowe', 'Ed Harris', 'Jennifer Connelly'],
        imdbLink:'https://www.imdb.com/title/tt0268978/'
    },

    'monkeyman': {
        title: 'Monkey Man',
         summary: 'The film follows the story of a former convict with a dark past, seeking redemption and a new life, who finds himself embroiled in a deadly conflict when he crosses paths with a notorious crime lord.',
         rating: '7.3/10',
         releaseYear: '2024',
         director: 'Dev Patel',
         cast: ['Dev Patel', 'Sharlto Copley', 'Daniel Wu'],
         imdbLink: 'https://www.imdb.com/title/tt9214772/'
        
    },

    'dune2': {
        title: 'Dune: Part Two',
        summary: 'The saga continues as Paul Atreides navigates the political landscape of Arrakis while harnessing his newfound powers and facing formidable adversaries.',
        rating: '8.8/10',
        releaseYear: '2024', 
        director: 'Denis Villeneuve',
        cast: ['Timothee Chalamet', 'Rebecca Ferguson', 'Zendaya', 'Oscar Isaac'],
        imdbLink: 'https://www.imdb.com/title/tt15239678/'
    },

    'kungfupanda4': {
        title: 'Kung Fu Panda 4',
        summary: 'Po and the Furious Five face a new threat to the Valley of Peace, testing their skills and friendship as they embark on another epic adventure.',
        rating: '6.4/10',
        releaseYear: '2024', 
        director: 'Mike Mitchell,Stephanie Stine',
        cast: ['Jack Black','Awkwafina','Viola Davis'],
        imdbLink: 'https://www.imdb.com/title/tt21692408/'
    },

    'godzilla': {
        title: 'Godzilla X Kong : The New Empire',
        summary: 'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island mystries.',
        rating: '6.6/10', 
        releaseYear: '2024',
        director: 'Adam Wingard',
        cast: ['Rebecca Hall','Brian Tyree', 'HenryDan Stevens'],
        imdbLink: 'https://www.imdb.com/title/tt14539740/'
    },

    'bobmarley': {
        title: 'Bob Marley: One Love',
        summary: 'This documentary delves into the life, music, and legacy of reggae legend Bob Marley, exploring his journey from humble beginnings in Jamaica to becoming an international icon of peace, love, and unity.',
        rating: '6.4/10',
        releaseYear: '2024', 
        director: 'Reinaldo Marcus Green',
        cast: ['Bob Marley', 'Various interviewees'],
        imdbLink: 'https://www.imdb.com/title/tt8521778/'
    },

    'ghostbuster': {
        title: 'Ghostbusters: Frozen Empire',
        summary: 'In "Ghostbusters: Frozen Empire," the team of ghost hunters faces their coldest challenge yet when a supernatural force threatens to freeze the entire city in eternal winter. With their proton packs and quick wit, they must save the day before the icy grip of the paranormal consumes everything.',
        rating: '6.5/10',
        releaseYear: '2024', 
        director:'Gil Kenan',
        cast: ['Paul Rudd','Carrie Coon','Finn Wolfhard'],
        imdbLink: 'https://www.imdb.com/title/tt21235248/' 
    },

    'poorthings': {
        title: 'Poor Things',
        summary: 'Set in Victorian-era Scotland, "Poor Things" tells the story of Bella Baxter, a young woman who is resurrected by a brilliant scientist after her untimely death. As Bella navigates her new life, she grapples with questions of identity, freedom, and love.',
        rating: '7.9',
        releaseYear: '2024', 
        director: 'Yorgos Lanthimos',
        cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe', 'Margot Robbie'],
        imdbLink: 'https://www.imdb.com/title/tt14230458/' 
    },

    'meangirls': {
        title: 'Mean Girls',
        summary: 'Cady Heron is a hit with the Plastics, an A-list girl clique at her new school. But everything changes when she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.',
        rating: '5.7',
        releaseYear: '2024',
        director: ['Samantha Jayne','Arturo Perez Jr'],
        cast: ['Angourie Rice','Reneé Rapp','Auli Cravalho'],
        imdbLink: 'https://www.imdb.com/title/tt11762114/'
    },

    'thebeekeeper': {
        title: 'The Beekeeper',
        summary: 'One mans brutal campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as "Beekeepers.',
        rating: '6.4/10',
        releaseYear: '2024',
        director: 'David Ayer',
        cast: ['Jason Statham','Emmy Raver-Lampman','Bobby Naderi'],
        imdbLink: 'https://www.imdb.com/title/tt15314262/' 
    },

    'thepromisedland': {
        title: 'The Promised Land',
        summary: 'In "The Promised Land," a group of settlers embarks on a perilous journey across uncharted territory in search of a new home. Along the way, they encounter challenges, conflicts, and unexpected allies as they strive to fulfill their dreams and build a better future.',
        rating: '7.7/10',
        releaseYear: '2024', 
        director: 'Nikolaj Arcel',
        cast: ['Mads Mikkelsen','Amanda Collin','Simon Bennebjerg'],
        imdbLink: 'https://www.imdb.com/title/tt20561198/' 
    },

    'argylle': {
        title: 'Argylle',
        summary: 'In "Argylle," a suave and skilled secret agent navigates a world of espionage, danger, and intrigue as he races against time to stop a global threat. Filled with action-packed sequences, witty banter, and unexpected twists, "Argylle" promises to deliver a thrilling spy adventure.',
        rating: '5.7/10',
        releaseYear: '2024', 
        director: 'Matthew Vaughn',
        cast: ['Henry Cavill','Bryce Dallas Howard','Sam Rockwell'],
        imdbLink: 'https://www.imdb.com/title/tt15009428/' 
    }

  };
  
  function openModal(movieAlt) {
    var modal = document.getElementById('myModal');
    var modalText = document.getElementById('modal-text');
  
    // Checking if the movie data exists
    if(movieData[movieAlt]) {
        var data = movieData[movieAlt];
        var moreInfoButton = `<a href="${data.imdbLink}" target="_blank" class="more-info-btn">More info</a>`;
        // Layout for the modal content
        modalText.innerHTML = `
        <h2>${data.title} (${data.releaseYear})</h2>
        <p><strong style="font-weight: bold;">Summary:</strong> ${data.summary}</p>
        <p><strong style="font-weight: bold;">Rating:</strong> ${data.rating}</p>
        <p><strong style="font-weight: bold;">Director:</strong> ${data.director}</p>
        <p><strong style="font-weight: bold;">Cast:</strong> ${data.cast.join(', ')}</p>
        ${moreInfoButton}
        `;
    } else {
        modalText.innerHTML = 'Information for this movie is not available.';
    }

    // Applying the fadeIn animation
    modal.style.display = 'block';
    var modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'fadeIn 1s ease forwards';
}

// Handling the close button for the modal
window.onload = function() {
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    // Event listener for each movie image
    var images = document.querySelectorAll('.picks img, .trending img, .newrelease img');
    images.forEach(function(img) {
        img.onclick = function() {
            var movieAlt = img.alt.replace(/ /g, '').toLowerCase(); // Normalizing the alt text to match keys in movieData
            openModal(movieAlt);
        };
    });
};

document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting all elements with the 'card' class
    document.querySelectorAll('.card').forEach(card => {
        // Adding a click event listener to each card
        card.addEventListener('click', function () {
            // Toggling the 'is-flipped' class on the clicked card
            card.classList.toggle('is-flipped');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            var searchValue = this.value.toLowerCase();
            var cards = document.querySelectorAll('.container .card');

            cards.forEach(function(card) {
                var title = card.querySelector('h3').textContent.toLowerCase();
                if (title.indexOf(searchValue) === -1) {
                    card.style.display = 'none';
                } else {
                    card.style.display = '';
                }
            });
        });
    } 
});
