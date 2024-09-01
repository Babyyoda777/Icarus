[BOM_Meshtastic-Full_2024-09-01.csv](https://github.com/user-attachments/files/16829591/BOM_Meshtastic-Full_2024-09-01.csv)# Meshtastic ESP-RA
A custom meshtastic PCB based on ESP-32 S3 and LoRa RA-01SH, designed to be fully assembled by JLCPCB.

# Schematics:
<img width="876" alt="Screenshot 2024-09-01 at 16 49 07" src="https://github.com/user-attachments/assets/14bab7b8-f230-4e34-a872-79968a595450">

# PCB:
<img width="600" alt="Screenshot 2024-09-01 at 16 50 02" src="https://github.com/user-attachments/assets/e0db5471-1796-4116-8bd5-d34689b64293">

<img width="604" alt="Screenshot 2024-09-01 at 16 50 13" src="https://github.com/user-attachments/assets/80293c4b-0fe2-412a-bcaa-78611a49dfe7">

# 3D Renders:
<img width="823" alt="Screenshot 2024-09-01 at 16 51 30" src="https://github.com/user-attachments/assets/624c87a4-a081-4fd9-947c-cf2488e95ecc">

# BOM:
[Uploading BOM_Meshtastic-FID	Name	Designator	Footprint	Quantity	Manufacturer Part	Manufacturer	Supplier	Supplier Part	Price
"1"	"SMA-KWE902"	"A1"	"SMA-TH_SMA-KWE902"	"1"	"SMA-KWE902"	"DreamLNK(骏晔科技)"	"LCSC"	"C914554"	"0.746"
"2"	"10uF"	"C1,C3,C4,C5,C6"	"C0805"	"5"	"CL21A106KAYNNNE"	"SAMSUNG(三星)"	"LCSC"	"C15850"	"0.01"
"3"	"100nF"	"C2,C7,C9"	"C0805"	"3"	"CL21B104KCFNNNE"	"SAMSUNG(三星)"	"LCSC"	"C28233"	"0.007"
"4"	"1uF"	"C8"	"C0603"	"1"	"CL10A105KB8NNNC"	"SAMSUNG(三星)"	"LCSC"	"C15849"	"0.004"
"5"	"XH-2AW_C722860"	"CN1"	"CONN-TH_XH-2AW_C722860"	"1"	"XH-2AW"	"CAX(创都)"	"LCSC"	"C722860"	"0.007"
"6"	"1N5819WS"	"D1"	"SOD-323_L1.8-W1.3-LS2.5-RD"	"1"	"1N5819WS"	"Hottech(合科泰)"	"LCSC"	"C191023"	"0.008"
"7"	"RA-01SH"	"L1"	"WIRELM-SMD_RA-01SH"	"1"	"Ra-01SH"	"Ai-Thinker(安信可)"	"LCSC"	"C2764087"	""
"8"	"RED"	"LED1"	"LED0402-R-RD"	"1"	"16-213/R6C-AQ2R2B/3T"	"EVERLIGHT(亿光)"	"LCSC"	"C264407"	"0.034"
"9"	"GREEN/YELLOW"	"LED2"	"LED0402-R-RD_GREEN"	"1"	"16-213/G6C-AK2L2VY/3T"	"EVERLIGHT(亿光)"	"LCSC"	"C471422"	"0.052"
"10"	"XL-5050RGBC-WS2812B"	"LED3"	"LED-SMD_4P-L5.0-W5.0-BL_XL-5050RGBC"	"1"	"XL-5050RGBC-WS2812B"	"XINGLIGHT(成兴光)"	"LCSC"	"C2843785"	"0.048"
"11"	"AO3401A"	"Q1"	"SOT-23_L2.9-W1.3-P1.90-LS2.4-BR"	"1"	"AO3401A"	"AOS"	"LCSC"	"C15127"	"0.054"
"12"	"10kΩ"	"R1"	"R0603"	"1"	"0603WAF1002T5E"	"UNI-ROYAL(厚声)"	"LCSC"	"C25804"	"0.001"
"13"	"2kΩ"	"R3"	"R0603"	"1"	"0603WAF2001T5E"	"UNI-ROYAL(厚声)"	"LCSC"	"C22975"	"0.001"
"14"	"1kΩ"	"R4,R5"	"R0402"	"2"	"0402WGF1001TCE"	"UNI-ROYAL(厚声)"	"LCSC"	"C11702"	"0.001"
"15"	"5.1kΩ"	"R6,R7"	"R0603"	"2"	"0603WAF5101T5E"	"UNI-ROYAL(厚声)"	"LCSC"	"C23186"	"0.001"
"16"	"BOOT"	"SW1"	"SW-SMD_L3.9-W3.0-P4.45"	"1"	"TS-1088R-02526"	"XUNPU(讯普)"	"LCSC"	"C455281"	"0.051"
"17"	"RESET"	"SW2"	"SW-SMD_L3.9-W3.0-P4.45"	"1"	"TS-1088R-02526"	"XUNPU(讯普)"	"LCSC"	"C455281"	"0.051"
"18"	"ESP32-S3-WROOM-1(N8R8)"	"U1"	"WIRELM-SMD_ESP32-S3-WROOM-1"	"1"	"ESP32-S3-WROOM-1-N8R8"	"ESPRESSIF(乐鑫)"	"LCSC"	"C2913201"	"4.625"
"19"	"TP4056"	"U2"	"ESOP-8_L4.9-W3.9-P1.27-LS6.0-BL-EP"	"1"	"TP4056-42-ESOP8"	"TOPPOWER(南京拓微)"	"LCSC"	"C16581"	"0.172"
"20"	"XC6220B331PR-G"	"U3"	"SOT-89-5_L4.5-W2.5-P1.50-LS4.4-BR"	"1"	"XC6220B331PR-G"	"TOREX(特瑞仕)"	"LCSC"	"C3013658"	"0.502"
"21"	"TVS/ESD"	"U4,U5,U6"	"SOD-523_L1.2-W0.8-LS1.6-BI"	"3"	"LESD5Z5.0CT1G"	"UMW(广东友台半导体)"	"LCSC"	"C2833276"	"0.012"
"22"	"LoRa Antenna"	"U7"	"LORA ANTENNA"	"1"	""	""	""	"C2838056"	""
"23"	"TYPEC-304J-BCP16"	"USB2"	"USB-C-SMD_TYPEC-304J-BCP16"	"1"	"TYPEC-304J-BCP16"	"XUNPU(讯普)"	"LCSC"	"C2835315"	"0.341"
ull_2024-09-01.csv…]()



Note: Currently untested, please wait until I place an order and check if it all works :)
