frappe.pages['chart'].on_page_load = function(wrapper) {
	new MyPage(wrapper);
}

//page content
MyPage = Class.extend ({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Siam',
			single_column: true
		});
//make page
			this.make();
	},
//make page
    make: function(){
			// grab the class
			let me = $(this);

			// body content
			// let body = `<h1>Hello, World</h1>`;

// push dam elemt to pages
			$(frappe.render_template(frappe.masar_chart_page.body, this)) .appendTo(this.page.main)
		}

//end of class
})
// // HTML content
let body = `<div class="widget-group ">
				<div class="widget-group-head">

					<div class="widget-group-control"></div>
				</div>
				<div class="widget-group-body grid-col-3"><div class="widget         widget-shadow    number-widget-box" data-widget-name="Annual Purchase">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Annual Purchase</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">د.ا 0.00 </div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last month
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Purchase Orders to Receive">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Purchase Orders to Receive</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">0</div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last week
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Purchase Orders to Bill">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Purchase Orders to Bill</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">0</div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last week
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Active Suppliers">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Active Suppliers</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">1</div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last month
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div></div>
			</div>`;
//farppe.masar_chart_page ={}
frappe.masar_chart_page = {
	  body: body
 }
