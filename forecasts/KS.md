---
title: Kansas
layout: statereport
statecode: KS
---
## Kansas
<table border="0" class="w3-table w3-striped w3-bordered w3-hoverable w3-medium">
  <thead>
    <tr style="text-align: center;" class="w3-light-grey">
      <th>Riskiest State Rank</th>
      <th>Population</th>
      <th>Model Est'd Active Infections</th>
      <th>Current Reproduction Rate (Rt)</th>
      <th>Hyp. Pre-Immunity Rt</th>
      <th>Vaccine Hesitant, % of Adults</th>
      <th>Daily Vaccines Initiated</th>
      <th>Vaccines Initiated, % of Pop.</th>
      <th>Vaccine & Acquired Immunity, % of Pop.</th>
      <th>Forecasted Date Herd Immunity Achieved</th>
      <th>Total Cases</th>
      <th>14-Day Avg Daily Cases</th>
      <th>Positivity Rate</th>
      <th>Total Deaths</th>
      <th>14-Day Avg Daily Deaths</th>
      <th>Hospitalized</th>
      <th>14-Day Avg Daily Hosp Admits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>16</td>
      <td>2,913,314</td>
      <td>27,644</td>
      <td><span style="color:transparent; font-size:0;">001.22</span>1.22<span style="color: red"> 🟥</span></td>
      <td>5.56</td>
      <td><span style="color:transparent; font-size:0;">000000019%</span>19%</td>
      <td><span style="color:transparent; font-size:0;">000002,693</span>2,693</td>
      <td><span style="color:transparent; font-size:0;">000000070%</span>70%</td>
      <td><span style="color:transparent; font-size:0;">000000079%</span>79%</td>
      <td><span style="color:transparent; font-size:0;">220127</span>January 27, 2022</td>
      <td>509,660</td>
      <td>3,014.6<span style="color: red">▲</span></td>
      <td><span style="color:transparent; font-size:0;">0000028.5%</span>28.5%<span style="color: red">▲</span></td>
      <td>7,141</td>
      <td>10.0<span style="color: red">▲</span></td>
      <td>1,253<span style="color: red">▲</span></td>
      <td>239.07<span style="color: red">▲</span></td>
    </tr>
  </tbody>
</table>
### How Fast is COVID-19 Currently Spreading?
<img src='/assets/images/covid19/KS_ch_positivetests.png'>
Positive COVID-19 Tests Per Day
: This chart shows the number of *daily new infections* detected by RT-PCR testing, the kind of tests that look for active infections (rather than antibody tests that look for evidence of past infections). The chart also plots the 7-day rolling average as a red line, which takes the simple mean of each day and the previous six days, in order to give a better sense of changes in the trend of new cases. Some states do not report this data every day, resulting in big spikes and dips. Many states also have consistently higher results on some days of the week, likely due to testing centers and lab opening hours. The 7-day rolling average line should give a more accurate sense of changes in trend.

- - - -
<img src='/assets/images/covid19/KS_ch_totaltests.png'>
Total COVID-19 Tests Per Day
: This chart shows positive and negative RT-PCR daily test results stacked on top of each other, meaning the top of each bar represents the total number of test results reported each day. The chart also plots the 7-day rolling average as a red line, which takes the simple mean of each day and the previous six days, in order to give a better sense of changes in the trend of new cases. Some states do not report this data every day, resulting in big spikes and dips. Many states also have consistently higher results on some days of the week, likely due to testing centers and lab opening hours. The 7-day rolling average line should give a more accurate sense of changes in trend.

- - - -
<img src='/assets/images/covid19/KS_ch_postestshare.png'>
Daily Positive COVID-19 Test Share (Positivity Rate)
: Similar to the previous chart, this chart shows positive and negative RT-PCR daily test results stacked on top of each other, but each day's results are normalized so the positive and negative results add up to 100%. The chart also plots the 7-day rolling average as a red line, which takes the simple mean of each day and the previous six days, in order to give a better sense of changes in the trend of new cases. Some states do not report this data every day, resulting in big spikes and dips. Many states also have consistently higher results on some days of the week, likely due to testing centers and lab opening hours. The 7-day rolling average line should give a more accurate sense of changes in trend.

- - - -
<img src='/assets/images/covid19/KS_ch_rt_confid.png'>
Reproduction Rate with Confidence Intervals
: The reproduction rate (sometimes referred to as the Rt, R0, or "R-naught") is the average number of people that each infected person transmits COVID-19 to. If the reproduction rate is below 1.0, then the epidemic will fizzle out. If the reproduction rate is above 1.0, then the epidemic is spreading exponentially. More information about how this chart was calculated is available on the methodology page.

- - - -
<img src='/assets/images/covid19/KS_ch_detection_rt.png'>
Daily Infection Detection Rate
: This chart shows the model estimated daily percentage of new infections that are detected through positive tests (RT-PCR tests that test for active infections). The formula for this detection rate is new reported daily positive test results / the model's estimate of new infections (new infections in the SEIR model are called "exposures"). Some people will be counted twice in the testing data, especially those in a hospital as doctors try to identify the end of an active infection. That double counting along with small expected model errors, especially at times when the underlying active infectious rate in a state is low, can result in detection rates above 100%.

- - - -
<div>
    <iframe 
    src="/forecasts/plotly/KS_casepercap_cnty_map.html"
    style="margin:0; width:100%; height:800px; border:none; overflow:hidden;" scrolling="no"></iframe>
</div>
New COVID-19 Cases Per 100k Residents Over Last 14 Days
: Newly reported COVID-19 cases per 100,000 residents over the most recent two weeks. The top end of the color scale is set at the 90th percentile of all US counties. This chart is based on reported data rather than modeled data. As a result, states with higher testing rates will appear worse off than states with lower testing rates.

- - - -
<img src='/assets/images/covid19/KS_ch_googmvmt.png'>
### Model and Forecast Results
Google Movement Data
: Through its [Community Mobility Reports](https://www.google.com/covid19/mobility/), Google has made public aggregate data that represent "movement trends over time by geography, across different categories of places such as retail and recreation, groceries and pharmacies, parks, transit stations, workplaces, and residential." These are percent changes from baseline (roughly the average of visits in February 2020.) Notice the spike in grocery and pharmacy visits in mid-March in most states.

- - - -
<img src='/assets/images/covid19/KS_ch_vax_status.png'>
Total People Vaccinated Forecast
: This chart shows the forecasted total number of people with completed vaccinations over time. It also shows the reported number of people with partially complete and completed vaccinations. Our forecast assumes that all adults, except for those who reported as hesitant to receive the vaccine in the US Census Bureau's Household Pulse Survey, will eventually be vaccinated. The rate of vaccinations is expected to slow as we approach the total number of adults who are willing to get vaccinated.

- - - -
<img src='/assets/images/covid19/KS_ch_vax_daily.png'>
Daily New Vaccinations Initiated Forecast
: This chart shows the forecasted number of people initiating a COVID-19 vaccination per day. It also shows the reported number for the same metric. Our forecast assumes that all adults, except for those who reported as hesitant to receive the vaccine in the US Census Bureau's Household Pulse Survey, will eventually be vaccinated. The rate of vaccinations is expected to slow as we approach the total number of adults who are willing to get vaccinated.

- - - -
<img src='/assets/images/covid19/KS_ch_rt_scen_explanation.png'>
Reproduction Rate Breakdown & Forecast
: This chart shows the historical and the forecasted effective reproduction rate (Rt) alongside what the reproduction rate hypothetically would have looked like if there were no immunity to COVID-19. In order to calculate the hypothetical Pre-Immunity/Behavioral Reproduction Rate, we divide the observed effective reproduction rate by the percentage of the overall population without any immunity (aka the susceptible population.) To estimate the susceptible population, we model the # of people previously infected and assume they have acquired immunity after their infection AND we forecast the number of people who have completed a vaccination against COVID-19. To avoid double counting, we assume vaccines are randomly distributed across susceptible and recovered populations. By calculating the hypothetical Pre-Immunity/Behavioral Reproduction Rate, we can see how close we are to the prevailing original reproduction rate (aka the basic Reproduction rate) at the beginning of the crisis. The original rate shows us how transmissible COVID-19 is in each region without mitigation measures and without immunity. Since our ultimate goal is to return to "normal life" without mitigation measures like social distancing, we will need to control the spread of COVID-19 through immunity alone. The forecasted hypothetical Rt brings us back to the original R0 by July 4, 2021, with an additional 20% transmissibility due to variants of concern. (To prevent nonsensical results, we constrain the current VOC R0 to be no less than 2.0 and no greater than 3.0 in any state.) If after that July 4th date, the forecasted effective Rt is below 1, then the region has achieved herd immunity and will eventually see their infection rate drop to very low levels.

- - - -
<img src='/assets/images/covid19/KS_ch_exposed_infectious.png'>
Simultaneous Infections Forecast
: The model is able to estimate the number of people with active infections in a region over time. The exposed population refers to people who have been infected very recently but are pre-symptomatic and less likely to be able to spread COVID-19. The Infectious Population is an estimate of the number of people who are currently experiencing symptoms and are able to spread COVID-19.

- - - -
<img src='/assets/images/covid19/KS_ch_hosp_concur.png'>
Hospitalization and Deaths Forecast
: The core model output is an estimate of the number of COVID-19 hospitalizations. More information on the methodology of this model is available on the [model methodology page](http://www.michaeldonnel.ly/covid19/methodology/). Concurrent hospitalizations refers to the number of COVID-19 cases estimated/forecast to be in the hospital on any given day. ICU cases are treated as a subset of hospitalizations and ventilations are treated as a subset of ICU cases.

- - - -
<img src='/assets/images/covid19/KS_ch_deaths_tot.png'>
Total Deaths Forecast
: The core model output is an estimate of the cumulative number of COVID-19 deaths. More information on the methodology of this model is available on the [model methodology page](http://www.michaeldonnel.ly/covid19/methodology/). Deaths represents the model's estimate for the total number of deaths to have occurred by a given date. 

- - - -
<img src='/assets/images/covid19/KS_ch_population_share.png'>
Population Overview Forecast
: The forecasting model also outputs estimates of the percentage of the overall population that has a current COVID-19 infection, recovered from a past infection, died from COVID-19, or is currently susceptible because they have not been previously infected. (Currently, since no vaccine exists, the entire uninfected population is represented as susceptible.) More information on the methodology of this model is available on the [model methodology page](http://www.michaeldonnel.ly/covid19/methodology/).

- - - -
<img src='/assets/images/covid19/KS_ch_cumul_infections.png'>
Cumulative Infections Forecast
: This chart shows the number of *total COVID-19 infections* estimated by the model over time. We show it alongside the number of total positive test results to show the estimated undercounting of cases. 

- - - -
<img src='/assets/images/covid19/KS_ch_daily_exposures.png'>
Daily Exposures Forecast
: This chart shows the number of *new infections* estimated by the model every day. We show it alongside the number of new positive test results to show the estimated undercounting of new cases. We call this the exposed population because refers to people who have been infected very recently but are pre-symptomatic and less likely to be able to spread COVID-19.

- - - -
<img src='/assets/images/covid19/KS_ch_hosp_admits.png'>
Daily Hospital Admissions Forecast
: This chart shows the number of *new hospital admissions with COVID-19 infections* estimated by the model over time. Hospital admissions differ from the earlier concurrent hospitalizations chart. Concurrent COVID-19 hospitalizations are determined by the sum of earlier admissions minus the sum of earlier discharges and deaths. We show it alongside the reported number of hospital admissions where available. Many states do not report this data at all and some only report it sporadically.

- - - -
<img src='/assets/images/covid19/KS_ch_daily_deaths.png'>
Daily Deaths Forecast
: This chart shows the number of *new deaths from COVID-19* estimated by the model over time.  Generally, reported COVID-19 death data from states is generally reliable. So there is rarely major difference between the model's estimates and the reported data. Occassionally there is a major spike or dip in the reported data as a result of changes in the reporting definitions from states.

- - - -
