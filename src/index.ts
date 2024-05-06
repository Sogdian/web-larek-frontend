import {EventEmitter} from "./components/base/events";
import {AppData} from "./components/AppData";
import {Card} from "./components/Card";
import {cloneTemplate, ensureElement} from "./utils/utils";
import {Page} from "./components/Page";

const appData = new AppData({}, events);
const events = new EventEmitter();
const page = new Page(document.body, events);

const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');

events.on('items:render', () => {
    page.list = appData.catalog.map((item) => {
        const cardCatalog = new Card(cloneTemplate(cardCatalogTemplate), {
            onClick: () => events.emit('card:selected', item),
        });
        return cardCatalog.render({
        });
    });
});