const Edition = require('../app/edition');

test('CaputalizeWords', () => {
  const utility = require('../app/utility');
  expect(utility.capitalizeWords('La meVa tITA es peTita', true)).toEqual('La Meva Tita Es Petita');
 
  
});


test('getTitle returns a null', () => {
    const title = new Edition();
    expect( title.getTitle()).toEqual(null);
   
    
  });

test('getTitle The title', () => {
    let title = new Edition();
    expect( title.getTitle()).toEqual(null);
    title = new Edition('MyTitle', 'seRgio naVarro', 'Andaguarra', //
     '978-1-4028-9462-6','ca'  );    
    expect( title.getTitle()).toEqual('Mytitle');
    expect( title.getAuthor()).toEqual('Sergio Navarro');
    expect( title.getEditor()).toEqual('Andaguarra');


  });