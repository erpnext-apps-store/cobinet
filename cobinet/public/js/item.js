/* add Preisangebot to item dashboard, only works for v11 and above */
try {
    cur_frm.dashboard.add_transactions([
        {
            'label': 'Cobinet',
            'items': ['Preisangebot']
        }
    ]);
} catch { /* do nothing for older versions */ }
