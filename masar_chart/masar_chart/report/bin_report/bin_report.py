# Copyright (c) 2013, KCSC and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	print(f"\n\n\n\{filters}\n\n\n\n")
	# _creation = filters.get('creation'), filters.get('creation') #date range
	# condition
	# conditions = " AND 1=1 "
	# if(filters.get('warehouse')):conditions += f" AND warehouse='{filters.get('warehouse')}' "
	# if(filters.get('item_code')):conditions += f" AND item_code='{filters.get('item_code')}' "
	# print(f"\n\n\n\{conditions}\n\n\n\n")

	data = frappe.db.sql("""SELECT name, warehouse, item_code, actual_qty, stock_value, valuation_rate, creation FROM `tabBin`;""")
	return data

def get_columns():
	return [
	   "Name: Link/Bin:200",
	   "Warehouse:Data:150",
	   "Item Code:Data:150",
	   "Actual Quantity:Data:150",
	   "Stock Value:Data:150",
	   "Valuation Rate:Data:150",
	   "Creation:Data:150"
	]   
