

// add data on your blog content page 
const data = [
    {
      span: 'Enter Heading',
      title: 'Example Title 1 lorem12 sum dolor sit, amet consectetur amet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consectetur ',

      description: 'Example description text 1 sdkajdnkjasndkjasnkjfndkjfbkdbskasdasdLorem amet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturvamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturipsum dolor sit, amet  amet  consectetur  ' ,
      title2: 'Example Title 1 lorem12 sum dolor sit, amet consectetur amet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consecteturamet consectetur ',
      span2: 'Enter Heading',
    },
  ];
  

  // this function create a div 

  function renderComponent(item) {
    const container = document.createElement('div');
    container.classList.add('component1');
  
    const spanElement = document.createElement('h5');
    spanElement.textContent = item.span;
    container.appendChild(spanElement);
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = item.title;
    container.appendChild(titleElement);
  
    const descriptionElement = document.createElement('a');
    descriptionElement.textContent = item.description;
    container.appendChild(descriptionElement);
    
    const titleElement2 = document.createElement('h3');
    titleElement2.textContent = item.title;
    container.appendChild(titleElement2);
   
    const spanElement2 = document.createElement('h5');
    spanElement2.textContent = item.span;
    container.appendChild(spanElement2);

    return container;
  }
  

  document.addEventListener("DOMContentLoaded", function() {
    const componentContainer = document.getElementById('componentContainer1');

  // for each loop  for create add items one by one 
    data.forEach((item) => {
      const component = renderComponent(item);
      componentContainer.appendChild(component);
    });
  });
  
  