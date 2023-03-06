const Edition = require('../edition');

const Money = require('dinero.js');

test('getTitle returns a null', () => {
    const title = new Edition();
    expect(title.getTitle()).toEqual(null);
});

test('getTitle The title', () => {
    let title = new Edition();
    expect(title.getTitle()).toEqual(null);
    title = new Edition(
        'MyTitle',
        'seRgio naVarro',
        'Andaguarra', //
        '978-1-4028-9462-6',
        'ca',
    );
    expect(title.getTitle()).toEqual('Mytitle');
    expect(title.getAuthor()).toEqual('Sergio Navarro');
    expect(title.getEditor()).toEqual('Andaguarra');
});

test('Sql table definition', () => {
    expect(Edition.sqlTableDef()).toEqual(
        'edition (id varchar(36), '+
        'title varchar(255), author varchar(255), editor varchar(255), '+
        'indexed_reference varchar(128), language varchar(3), support varchar(3), '+
        'publication_date date, first_publication_date date);'
    );
});
