const puppeteer = require('puppeteer');
const { default: startBrowser } = require('../../src/scraper/browser');

let code = '5c79b9fa2334f476f6147457a34357efc3fa31db';
const pageURL = 'https://voarfacil.net/eticket/';

const pageTitle = 'Localizador - 5c79b9fa2334f476f6147457a34357efc3fa31db';

let page, browser;

beforeAll(async () => {
	browser = await startBrowser();
	page = await browser.newPage();

	await page.goto(pageURL + code, { waitUntil: 'networkidle2' });
});

const timeout = 15000;

afterAll(async () => {
	await page.close();
	await browser.close();
});

describe('Test page title and header', () => {
	it(
		'Should be return a list of state',
		async () => {
			const title = await page.title();
			expect(title).toBe(pageTitle);
		},
		timeout,
	);
});

async function extractAirlines() {
	return null;
}

describe('Get ticket flight header', () => {
	it('Should be return a flight header information', async () => {
		const flightHeader = await extractAirlines();
		expect(flightHeader).toBe('');
	});
});
