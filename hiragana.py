import fitz
from pykakasi import kakasi

# Initialize Kakasi for kanji to hiragana conversion
kakasi = kakasi()
kakasi.setMode("J", "H")
conv = kakasi.getConverter()

# Path to the PDF file
pdf_path = "C:/Users/pakhom/Downloads/システムインフラ基礎.pdf"

# Open the PDF file
pdf_document = fitz.open(pdf_path)

# Initialize an empty string to store converted text
converted_text = ""

# Iterate through each page of the PDF
for page_num in range(pdf_document.page_count):
    # Get text from the current page
    page = pdf_document.load_page(page_num)
    text = page.get_text()

    # Convert kanji to hiragana and append to the converted text
    converted_text += conv.do(text)

# Close the PDF document
pdf_document.close()

# Save the converted text to a file
with open("converted_text.txt", "w", encoding="utf-8") as file:
    file.write(converted_text)
