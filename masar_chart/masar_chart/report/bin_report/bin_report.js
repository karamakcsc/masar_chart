// Copyright (c) 2016, KCSC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Bin Report"] = {
	"filters": [
		{
			"fieldname": "warehouse",
		  "label": __("Warehouse"),
		  "fieldtype": "Link",
			"options": "Warehouse",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "creation",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_start()
		},
		{
			"fieldname": "item_code",
			"label": __("Item Code"),
			"fieldtype": "Link",
			"options": "Item",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "actual_qty",
			"label": __("Actual Quantity"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "valuation_rate",
			"label": __("Valuation Rate"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		 }
	]
};
