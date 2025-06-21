import puppeteer from "puppeteer";
import fs from "fs";
import { Parser } from "json2csv";
import * as XLSX from "xlsx";

async function obtenerDatosAngular() {
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 300
    });

    const pagina = await navegador.newPage();

    try {
        await pagina.goto('https://blog.angular.dev', {
            waitUntil: 'networkidle2',
            timeout: 60000
        });
    } catch (error) {
        console.error('Error al cargar la página:', error.message);
        await navegador.close();
        return;
    }

    const datos = await pagina.evaluate(() => {
        const resultados = [];
        const articulos = document.querySelectorAll('main article');

        articulos.forEach(articulo => {
            const titulo = articulo.querySelector('h2')?.innerText;
            const autor = articulo.querySelector('p')?.innerText;
            const fecha = articulo.querySelector('div.o.p.mn>span')?.innerText;
            const avatar = articulo.querySelector('img')?.src || '';
            const likes = articulo.querySelector('div.o.p.mp>span:nth-child(2)')?.innerText;
            const comentarios = articulo.querySelector('div.do.mj.mk.o.p > a > div:nth-child(2) > div.o > div.dd > div.o.p.mp > span')?.innerText;

            resultados.push({
                titulo,
                fecha,
                autor,
                avatar,
                likes,
                comentarios
            });
        });

        return resultados;
    });

    // Guardar JSON
    fs.writeFileSync('datos.json', JSON.stringify(datos, null, 2));
    console.log('Datos guardados en datos.json');

    // Guardar CSV
    try {
        const parser = new Parser();
        const csv = parser.parse(datos);
        fs.writeFileSync('datos.csv', csv);
        console.log('Datos guardados en datos.csv');
    } catch (err) {
        console.error('Error al crear CSV:', err.message);
    }

    // Guardar XLSX
    try {
        const worksheet = XLSX.utils.json_to_sheet(datos);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Artículos");
        XLSX.writeFile(workbook, "datos.xlsx");
        console.log('Datos guardados en datos.xlsx');
    } catch (err) {
        console.error('Error al crear XLSX:', err.message);
    }

    await navegador.close();
}

obtenerDatosAngular();
