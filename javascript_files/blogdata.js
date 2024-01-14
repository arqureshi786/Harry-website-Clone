// data.js
const data = [
    {
      imageUrl: '/images/road-g0a0228527_1920.jpg',
      span: '2023',
      title: 'Example Title 1',
      description: 'Example description text 1.',
      link: '/Components/blogcontentpages.html'
    },
    {
      imageUrl: '/images/road-g0a0228527_1920.jpg',
      span: '2023',
      title: 'Example Title 1',
      description: 'Example description text 1.',
      link: 'page3.html'
    },
    {
      imageUrl: '/images/ocean-3605547__480.jpg',
      span: '2023',
      title: 'Example Title 2',
      description: 'Example description text 2.',
      link: 'page3.html'
    },
    {
      imageUrl: '/images/ocean-3605547__480.jpg',
      span: '2023',
      title: 'Example Title 2',
      description: 'Example description text 2.',
      link: 'page3.html'
    },
    {
      imageUrl: '/images/mountains-g8fbbcb24c_1280.jpg',
      span: '2023',
      title: 'Example Title 3',
      description: 'Example description text 3.',
      link: 'page3.html'
    },
    {
      imageUrl: '/images/mountains-g8fbbcb24c_1280.jpg',
      span: '2023',
      title: 'Example Title 4',
      description: 'Example description text 4.',
      link: 'page3.html'
    }
  ];
  
  function renderComponent(item) {
    const container = document.createElement('div');
  
    // Create a div for the image container
    const imageContainer = document.createElement('div');
  
    const imageElement = document.createElement('img');
    imageElement.src = item.imageUrl;
    imageContainer.appendChild(imageElement);
  
    // Append the image container to the main container
    container.appendChild(imageContainer);
  
    // Create a div for the text container
    const textContainer = document.createElement('div');
  
    const spanElement = document.createElement('h5');
    spanElement.textContent = item.span;
    textContainer.appendChild(spanElement);
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = item.title;
    textContainer.appendChild(titleElement);
  
    const descriptionElement = document.createElement('a');
    descriptionElement.textContent = item.description;
    descriptionElement.href = item.link;
    textContainer.appendChild(descriptionElement);
    
    
  
    // Append the text container to the main container
    container.appendChild(textContainer);
  
    return container;
  }
  
  // render.js
  document.addEventListener("DOMContentLoaded", function() {
    const componentContainer = document.getElementById('componentContainer');
  
    data.forEach((item) => {
      const component = renderComponent(item);
  
      // Create a wrapper div for each component
      const wrapperDiv = document.createElement('div');
      wrapperDiv.classList.add('component');
  
      // Append the component to the wrapper div
      wrapperDiv.appendChild(component);
  
      // Append the wrapper div to the container
      componentContainer.appendChild(wrapperDiv);
    });
  });
  