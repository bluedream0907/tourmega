# encoding: utf-8
class RedactorRailsDocumentUploader < BaseUploader
  include RedactorRails::Backend::CarrierWave

  def store_dir
    "system/redactor_assets/documents/#{model.id}"
  end

  def extension_white_list
    RedactorRails.document_file_types
  end
end
