# To add a new cell, type '#%%'
# To add a new markdown cell, type '#%% [markdown]'

#%%
import pandas as pd
from bs4 import BeautifulSoup
from urllib import request
import json
import re


#%%
def convert_to_int(st):
    return int(''.join(filter(str.isdigit, st)))


#%%
UFC_URL = "https://www.ufc.com/athlete/khabib-nurmagomedov"


#%%
html = request.urlopen(UFC_URL).read()
soup = BeautifulSoup(html, 'html.parser')


#%%
stats_percent = soup.select("div.c-stat-compare__number")
stats_label = soup.select("div.c-stat-compare__label")


#%%
stats_val = []
for s in stats_percent:
    st = s.text.strip()
    st = convert_to_int(st)
    stats_val.append(st)


#%%
labels = []
for s in stats_label:
    labels.append(s.text)


#%%
obj = dict(zip(labels, stats_val))


#%%
main_stat = soup.select("svg.e-chart-circle title")


#%%
main_stats = []
for m in main_stat:
    match = re.match(r"(\w*)", m.text)
    if(match):
        items = match.groups()
    main_stats.append(items[0]+"_accuracy_%")


#%%
percents = []

for percent in soup.select("text.e-chart-circle__percent"):
    st = convert_to_int(percent.text)
    percents.append(st)


#%%
stats_obj = dict(zip(main_stats, percents))


#%%
obj.update(stats_obj)


#%%
pos_and_win_types_vals = []

for t in soup.select("div.c-stat-3bar__value"):
    st = t.text.split(" ")[1]
    st = st.replace("(", "")
    st = st.replace(")", "")
    st = convert_to_int(st)
    pos_and_win_types_vals.append(st)


#%%
pos_and_win_types_labels = []

for l in soup.select("div.c-stat-3bar__label"):
    pos_and_win_types_labels.append(l.text.strip()+ "_%")


#%%
pos_win = dict(zip(pos_and_win_types_labels,pos_and_win_types_vals))


#%%
obj.update(pos_win)


#%%
strike_types = {
    'head_strikes_%' : convert_to_int(soup.select("text#e-stat-body_x5F__x5F_head_percent")[0].text),
    'body_strikes_%' : convert_to_int(soup.select("text#e-stat-body_x5F__x5F_body_percent")[0].text),
    'legs_strikes_%' : convert_to_int(soup.select("text#e-stat-body_x5F__x5F_leg_percent")[0].text)
}


#%%
obj.update(strike_types)


#%%
obj


#%%



#%%
# https://www.ufc.com/event/ufc-242#7934  <--- Get In Fight Stats!!


#%%



#%%



