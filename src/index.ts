events.on('items:render', () => {
    page.list = appData.catalog.map((item) => {
        const cardCatalog = new Card(cloneTemplate(cardCatalogTemplate), {
            onClick: () => events.emit('card:selected', item),
        });
        return cardCatalog.render({
        });
    });
});