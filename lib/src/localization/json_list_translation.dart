import 'dart:ui';

import 'package:portfolio/src/localization/codegen_loader.g.dart';

List<Map<String, dynamic>> trList(Locale locale, String key) {
  final mapLocales = CodegenLoader.mapLocales[locale.languageCode];
  final mapValue = mapLocales?[key];
  return mapValue;
}
