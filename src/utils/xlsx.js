import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export const exportDataToXLSX = (kilo, details, card, location, subsectors, products) => {
	const workbook = new ExcelJS.Workbook();
	kilo.sort((a, b) => {
		return b['Ano'] - a['Ano'];
	});

	createKiloWorksheet(workbook, kilo);
	createDetailsWorksheet(workbook, details);
	createCardsWorksheet(workbook, card);
	createLocationWorksheet(workbook, location);
	createSubsectorsWorksheet(workbook, subsectors);
	createProductsWorksheet(workbook, products);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - Exportação.xlsx');
	});
};

export const exportHistoryXLSX = (ppcData, relativity, share) => {
	const workbook = new ExcelJS.Workbook();
	ppcData.sort((a, b) => {
		return a['sort'] - b['sort'];
	});
	share.sort((a, b) => {
		return a['sort'] - b['sort'];
	});

	createPPCDataWorksheet(workbook, ppcData);
	createRelativityWorksheet(workbook, relativity);
	createShareValueWorksheet(workbook, share);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - Análise de Concorrentes.xlsx');
	});
};

export const exportMarketValueXLSX = (monthAverage, dayAverage) => {
	const workbook = new ExcelJS.Workbook();

	createMonthAverageDataWorksheet(workbook, monthAverage);
	createDayAverageDataWorksheet(workbook, dayAverage);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Market Value Seara.xlsx');
	});
};

const createKiloWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Exportacao Kilo');

	worksheet.addTable({
		name: 'ExportKilo',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Período' },
			{ filterButton: true, name: 'Exportação', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: '%Exportação' },
		],
		rows: data.map(item => {
			const row = [];
			row.push(item['Período']);
			row.push(item['Exportação']);
			row.push(parseFloat(item['%Exportação']));
			return row;
		}),
	});
	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createDetailsWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Detalhamento');
	worksheet.addTable({
		name: 'Detalhamento',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium5',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Local' },
			{ filterButton: true, name: 'NO_PAIS' },
			{ filterButton: true, name: 'CO_NCM' },
			{ filterButton: true, name: 'Total Exportação (KG)', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Exportação LY', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: '%Exportação' },
			{ filterButton: true, name: 'Faturamento', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Ranking Mundial' },
			{ filterButton: true, name: 'Media Exportação', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Maior Exportação', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Maior Faturamento', style: { numFmt: '#,##0.00' } },
		],
		rows: [
			...data.map(item => {
				const res = [];
				res.push(item['Local']);
				res.push(item['NO_PAIS']);
				res.push(item['CO_NCM']);
				res.push(item['Total Exportação (KG)']);
				res.push(item['Exportação LY']);
				res.push(parseFloat(item['%Exportação']));
				res.push(item['Faturamento']);
				res.push(item['Ranking Mundial']);
				res.push(item['Media Exportação']);
				res.push(item['Maior Exportação']);
				res.push(item['Maior Faturamento']);
				return res;
			}),
		],
	});
	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createCardsWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Resumo');

	worksheet.addTable({
		name: 'Resumo',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Qtde_Produtos', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Peso_KG', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Valor', style: { numFmt: '#,##0.00' } },
		],
		rows: [[data.exportsKiloQuantity, data.exportsKiloTotalWeight, data.exportsKiloValue]],
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createLocationWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Locais');

	worksheet.addTable({
		name: 'Locais',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium5',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Continente' },
			{ filterButton: true, name: 'Pais' },
			{ filterButton: true, name: 'Peso_KG', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Valor', style: { numFmt: '#,##0.00' } },
		],
		rows: [
			...data.map(item => {
				const res = [];
				res.push(item['Continente']);
				res.push(item['Pais']);
				res.push(item['Peso_KG']);
				res.push(item['Valor']);
				return res;
			}),
		],
	});
	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createSubsectorsWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Subsetores');

	worksheet.addTable({
		name: 'Subsetores',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium5',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Subsetor' },
			{ filterButton: true, name: 'Peso_KG', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Valor', style: { numFmt: '#,##0.00' } },
		],
		rows: [
			...data.map(item => {
				const res = [];
				res.push(item['Subsetor']);
				res.push(item['Peso_KG']);
				res.push(item['Valor']);
				return res;
			}),
		],
	});
	worksheet.removeConditionalFormatting();

	return worksheet;
};
const createProductsWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Produtos');

	worksheet.addTable({
		name: 'Produtos',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium5',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Subsetor' },
			{ filterButton: true, name: 'Peso_KG', style: { numFmt: '#,##0' } },
			{ filterButton: true, name: 'Valor', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Tipo' },
		],
		rows: [
			...data.map(item => {
				const res = [];
				res.push(item['Subsetor']);
				res.push(item['Peso_KG']);
				res.push(item['Valor']);
				res.push(item['Tipo']);
				return res;
			}),
		],
	});
	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createPPCDataWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('PPC Data x Fabricante');

	worksheet.addTable({
		name: 'PpcData',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mes' },
			{ filterButton: true, name: 'Fabricante' },
			{ filterButton: true, name: 'PPC' },
		],
		rows: data.map(item => {
			const row = [];
			row.push(item['Ano']);
			row.push(item['Mes']);
			row.push(item['Fabricante']);
			row.push(item['PPC']);
			return row;
		}),
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createMonthAverageDataWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Preço Médio Mensal');

	worksheet.addTable({
		name: 'PrecoMedioMensal',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'MesAno' },
			{ filterButton: true, name: 'Dia' },
			{ filterButton: true, name: 'Preco' },
			{ filterButton: true, name: 'Mercado' },
		],
		rows: data.map(item => {
			const row = [];
			row.push(item['MesAno']);
			row.push(item['Dia']);
			row.push(item['Preco']);
			row.push(item['Mercado']);
			return row;
		}),
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createDayAverageDataWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Preço Médio Dia');

	worksheet.addTable({
		name: 'PrecoMedioDia',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Mercado' },
			{ filterButton: true, name: 'Tipo' },
			{ filterButton: true, name: 'Moeda' },
			{ filterButton: true, name: 'YtY' },
			{ filterButton: true, name: 'YTD' },
			{ filterButton: true, name: 'MTD' },
		],
		rows: data.map(item => {
			const row = [];
			row.push(item['Mercado']);
			row.push(item['Tipo']);
			row.push(item['Moeda']);
			row.push(item['YtY']);
			row.push(item['YTD']);
			row.push(item['MTD']);
			return row;
		}),
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createRelativityWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('PPC Relatividade');

	worksheet.addTable({
		name: 'PPCRelatividade',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Fabricante' },
			{ filterButton: true, name: 'PPC' },
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mes' },
		],
		rows: data.map(item => {
			const row = [];
			row.push(item['Fabricante']);
			row.push(item['PPC']);
			row.push(item['Ano']);
			row.push(item['Mes']);
			return row;
		}),
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createShareValueWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Share Value');

	worksheet.addTable({
		name: 'Share Value',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mes' },
			{ filterButton: true, name: 'Marca' },
			{ filterButton: true, name: '% Share Valor', style: { numFmt: '#,##0.00' } },
		],
		rows: data.map(item => {
			const row = [];
			row.push(item['Ano']);
			row.push(item['Mes']);
			row.push(item['Marca']);
			row.push(item['Share']);
			return row;
		}),
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

export const exportPriceGap = (gap, prices) => {
	const workbook = new ExcelJS.Workbook();
	createGapWorksheet(workbook, gap);
	createPricesWorksheet(workbook, prices);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - GAP Preco.xlsx');
	});
};

const createGapWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('GAP');

	worksheet.addTable({
		name: 'GAP',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Classe' },
			{ filterButton: true, name: 'Marca' },
			{ filterButton: true, name: 'Marca Concorrente' },
			{ filterButton: true, name: 'UF' },
			{ filterButton: true, name: 'GAP' },
		],
		rows: data,
	});

	return worksheet;
};

const createPricesWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Precos');

	worksheet.addTable({
		name: 'GAP',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium5',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Produto' },
			{ filterButton: true, name: 'Marca Concorrente' },
			{ filterButton: true, name: 'UF' },
			{ filterButton: true, name: 'GAP' },
			{ filterButton: true, name: 'Preço Médio' },
			{ filterButton: true, name: 'Preço Concorrente' },
			{ filterButton: true, name: 'Relatividade Atual' },
			{ filterButton: true, name: 'Preço Ideal' },
			{ filterButton: true, name: 'Relatividade Ideal' },
			{ filterButton: true, name: 'Faturamento Ideal' },
			{ filterButton: true, name: 'Volume' },
		],
		rows: data,
	});

	return worksheet;
};

export const exportForecast = (charts, volumeTable, priceTable, cards) => {
	const workbook = new ExcelJS.Workbook();
	createVolumeChartWorksheet(workbook, charts.volume);
	createVolumeTableWorksheet(workbook, volumeTable);
	createForecastVolumeCardWorksheet(workbook, cards.volume);
	createPriceChartWorksheet(workbook, charts.price);
	createPriceTableWorksheet(workbook, priceTable);
	createForecastPriceCardWorksheet(workbook, cards.price);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - Forecast.xlsx');
	});
};

const createVolumeChartWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Volume - Gráfico');

	worksheet.addTable({
		name: 'Volume - Gráfico',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Mês/Ano' },
			{ filterButton: true, name: 'Real', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Forecast', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Forecast Min', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Forecast Max', style: { numFmt: '#,##0.00' } },
		],
		rows: data,
	});

	return worksheet;
};
const createPriceChartWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Preço - Gráfico');

	worksheet.addTable({
		name: 'Preço - Gráfico',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Mês/Ano' },
			{ filterButton: true, name: 'Real', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Forecast', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Forecast Min', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Forecast Max', style: { numFmt: '#,##0.00' } },
		],
		rows: data,
	});

	return worksheet;
};
const createVolumeTableWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Volume - Tabela');

	worksheet.addTable({
		name: 'Volume - Tabela',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'SKU' },
			{ filterButton: true, name: 'Canal' },
			{ filterButton: true, name: 'UF' },
			{ filterButton: true, name: 'Correlação Vol SKU' },
			{ filterButton: true, name: 'Efeito LAG SKU' },
			{ filterButton: true, name: 'Correlação Vol Capitão' },
			{ filterButton: true, name: 'Efeito LAG Capitão' },
			{ filterButton: true, name: 'Correlação Vol Classe' },
			{ filterButton: true, name: 'Efeito LAG Classe' },
		],
		rows: data,
	});

	return worksheet;
};
const createPriceTableWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Preço - Tabela');

	worksheet.addTable({
		name: 'Preço - Tabela',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'SKU' },
			{ filterButton: true, name: 'Canal' },
			{ filterButton: true, name: 'UF' },
			{ filterButton: true, name: 'Correlação Vol SKU' },
			{ filterButton: true, name: 'Efeito LAG SKU' },
			{ filterButton: true, name: 'Correlação Vol Capitão' },
			{ filterButton: true, name: 'Efeito LAG Capitão' },
			{ filterButton: true, name: 'Correlação Vol Classe' },
			{ filterButton: true, name: 'Efeito LAG Classe' },
		],
		rows: data,
	});

	return worksheet;
};

const createForecastPriceCardWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Preço - Resumo');

	worksheet.addTable({
		name: 'Preço - Resumo',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Preço Próximos 3 meses', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Acurácia Treino', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Acurácia Teste', style: { numFmt: '#,##0.00' } },
		],
		rows: [[data.expectationThreeMonths, data.accuracyTraining, data.accuracyTesting]],
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

const createForecastVolumeCardWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Volume - Resumo');

	worksheet.addTable({
		name: 'Volume - Resumo',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Volume Próximos 3 meses', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Acurácia Treino', style: { numFmt: '#,##0.00' } },
			{ filterButton: true, name: 'Acurácia Teste', style: { numFmt: '#,##0.00' } },
		],
		rows: [[data.expectationThreeMonths, data.accuracyTraining, data.accuracyTesting]],
	});

	worksheet.removeConditionalFormatting();

	return worksheet;
};

export const exportRelativity = table => {
	const workbook = new ExcelJS.Workbook();
	createRelativityMapWorksheet(workbook, table);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - Mapa da Relatividade.xlsx');
	});
};

const createRelativityMapWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Mapa da Relatividade');

	worksheet.addTable({
		name: 'Mapa da Relatividade',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Segmento' },
			{ filterButton: true, name: 'Produto' },
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mapa Relatividade', style: { numFmt: '#,##0.00' } },
		],
		rows: data,
	});

	return worksheet;
};

export const exportMarketEvolution = (mediaTon, marketEvo, share, volumeEvo) => {
	const workbook = new ExcelJS.Workbook();
	createMediaTonWorksheet(workbook, mediaTon);
	createMarketEvoWorksheet(workbook, marketEvo);
	createMarketEvoShareWorksheet(workbook, share);
	createVolumeEvolutionWorksheet(workbook, volumeEvo);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - Evolução Mercado.xlsx');
	});
};

const createMediaTonWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Média Volume (TON)');

	worksheet.addTable({
		name: 'Média Volume (TON)',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Canal' },
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mês' },
			{ filterButton: true, name: 'Média Volume (TON)', style: { numFmt: '#,##0.00' } },
		],
		rows: data,
	});

	return worksheet;
};

const createMarketEvoWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Evolução Mercado');
	worksheet.addTable({
		name: 'Evolução Mercado',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mês' },
			{ filterButton: true, name: 'AS' },
			{ filterButton: true, name: 'C&C' },
			{ filterButton: true, name: 'AS+C&C' },
		],
		rows: data,
	});

	return worksheet;
};
const createMarketEvoShareWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Share Valor');
	worksheet.addTable({
		name: 'Share Valor',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Canal' },
			{ filterButton: true, name: 'Marca' },
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mês' },
			{ filterButton: true, name: '% Share Valor' },
		],
		rows: data,
	});

	return worksheet;
};
const createVolumeEvolutionWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Evolução Volume');
	worksheet.addTable({
		name: 'Evolução Volume',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Produto' },
			{ filterButton: true, name: 'Ano' },
			{ filterButton: true, name: 'Mês' },
			{ filterButton: true, name: 'Evolução Volume - Detalhe' },
		],
		rows: data,
	});

	return worksheet;
};

export const exportLogs = logs => {
	const workbook = new ExcelJS.Workbook();
	createLogsWorksheet(workbook, logs);

	workbook.xlsx.writeBuffer().then(function(data) {
		let blob = new Blob([data], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		saveAs(blob, 'Pricing Seara - Logs.xlsx');
	});
};

const createLogsWorksheet = (workbook, data) => {
	const worksheet = workbook.addWorksheet('Logs');

	worksheet.addTable({
		name: 'Logs',
		ref: 'A1',
		headerRow: true,
		totalsRow: false,
		style: {
			theme: 'TableStyleMedium2',
			showRowStripes: true,
		},
		columns: [
			{ filterButton: true, name: 'Nome' },
			{ filterButton: true, name: 'Latitude' },
			{ filterButton: true, name: 'Longitude' },
			{ filterButton: true, name: 'IP de Acesso' },
			{ filterButton: true, name: 'Rotas que o usuário solicitou' },
			{ filterButton: true, name: 'Data do último acesso' },
		],
		rows: data,
	});

	return worksheet;
};
